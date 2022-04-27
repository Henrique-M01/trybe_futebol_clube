import Teams from '../database/models/TeamsModel';

async function getAll() {
  const allTeams = await Teams.findAll();

  if (!allTeams) return false;

  return allTeams;
}

export default { getAll };
