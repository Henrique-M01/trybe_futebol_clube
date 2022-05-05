import TeamResults from '../helpers/TeamResults';
import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';
import sortLeaderboard from '../helpers/SortLeaderboard';

async function leaderboardHome() {
  const allTeams = await Teams.findAll();
  const allMatches = await Matches.findAll();
  const teamsHome: TeamResults[] = [];
  allTeams.forEach((team) => {
    const resultMatches = allMatches
      .filter((match) => (match.inProgress === false && match.homeTeam === team.id))
      .map((match) => ({
        goalsFavor: match.dataValues.homeTeamGoals, goalsOwn: match.awayTeamGoals }));
    const newTeamResult = new TeamResults({
      teamName: team.teamName.toString(), matches: resultMatches });
    teamsHome.push(newTeamResult);
  });

  return sortLeaderboard(teamsHome);
}

export default { leaderboardHome };
