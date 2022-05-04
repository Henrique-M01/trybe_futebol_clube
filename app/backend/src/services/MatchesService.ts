import Teams from '../database/models/TeamsModel';
import Matches from '../database/models/MatchesModel';
import IBodyMatch from '../interfaces/IBodyMatch';

async function getAll() {
  const allMatches = await Matches.findAll({
    include: [{ model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } }],
  });

  if (!allMatches) return false;

  return allMatches;
}

async function createMatch(body: IBodyMatch) {
  const { homeTeam, awayTeam, awayTeamGoals, homeTeamGoals, inProgress } = body;

  if (homeTeam === awayTeam) return false;

  const homeTeamExist = await Teams.findByPk(homeTeam);
  const awayTeamExist = await Teams.findByPk(awayTeam);

  if (!homeTeamExist || !awayTeamExist) return null;

  const create = await Matches.create({
    homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress });

  return create.dataValues;
}

async function updateMatchesFinish(id: string) {
  const update = await Matches.update({ inProgress: false }, { where: { id } });

  if (!update) return false;

  return update;
}

async function updateInProgress(id: string, homeTeamGoals: number, awayTeamGoals: number) {
  const update = await Matches.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });

  if (!update) return false;

  return update;
}

export default { getAll, createMatch, updateMatchesFinish, updateInProgress };
