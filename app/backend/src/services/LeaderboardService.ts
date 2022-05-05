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
      .filter((match) => (match.dataValues.homeTeam === team.dataValues.id
          && match.dataValues.inProgress === false))
      .map((match) => ({
        goalsFavor: match.dataValues.homeTeamGoals, goalsOwn: match.dataValues.awayTeamGoals }));
    const newTeamResult = new TeamResults({
      teamName: team.dataValues.teamName, matches: resultMatches });
    teamsHome.push(newTeamResult);
  });

  return sortLeaderboard(teamsHome);
}

export default { leaderboardHome };
