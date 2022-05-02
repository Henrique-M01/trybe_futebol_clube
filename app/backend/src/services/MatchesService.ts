import Teams from '../database/models/TeamsModel';
import Matches from '../database/models/MatchesModel';

async function getAll() {
  const allMatches = await Matches.findAll({
    include: [{ model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } }],
  });

  if (!allMatches) return false;

  return allMatches;
}

export default { getAll };
