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

async function leaderboardAway() {
  const allTeams = await Teams.findAll();
  const allMatches = await Matches.findAll();
  const teamsAway: TeamResults[] = [];
  allTeams.forEach((team) => {
    const resultMatches = allMatches
      .filter((match) => (match.dataValues.awayTeam === team.dataValues.id
      && match.dataValues.inProgress === false))
      .map((match) => ({
        goalsFavor: match.dataValues.awayTeamGoals, goalsOwn: match.dataValues.homeTeamGoals }));
    const newTeamResult = new TeamResults({
      teamName: team.dataValues.teamName, matches: resultMatches });
    teamsAway.push(newTeamResult);
  });

  return sortLeaderboard(teamsAway);
}

async function leaderboardAll() {
  const allTeams = await Teams.findAll();
  const allMatches = await Matches.findAll();
  const allGames: TeamResults[] = [];
  allTeams.forEach((team) => {
    const homeMatches = allMatches
      .filter((match) => (match.dataValues.homeTeam === team.dataValues.id
          && match.dataValues.inProgress === false))
      .map((match) => ({
        goalsFavor: match.dataValues.homeTeamGoals, goalsOwn: match.dataValues.awayTeamGoals }));
    const awayMatches = allMatches
      .filter((match) => (match.dataValues.awayTeam === team.dataValues.id
        && match.dataValues.inProgress === false))
      .map((match) => ({
        goalsFavor: match.dataValues.awayTeamGoals, goalsOwn: match.dataValues.homeTeamGoals }));
    allGames.push(new TeamResults({
      teamName: team.dataValues.teamName, matches: [...homeMatches, ...awayMatches] }));
  });
  return sortLeaderboard(allGames);
}

export default { leaderboardHome, leaderboardAway, leaderboardAll };
