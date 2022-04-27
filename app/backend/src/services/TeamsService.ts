import Teams from '../database/models/TeamsModel';

async function getAll() {
  const allTeams = await Teams.findAll();

  if (!allTeams) return false;

  return allTeams;
}

async function getById(id: string) {
  const team = await Teams.findByPk(id);

  if (!team) return false;

  return team;
}

export default { getAll, getById };
