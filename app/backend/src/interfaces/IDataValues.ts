export default interface IDataValues {
  id?: number;
  username: string;
  role: string;
  email: string;
  password?: string,
}

export interface IDataValuesMatches {
  homeTeamGoals: number;
  awayTeamGoals: number;
  homeTeam: number;
  awayTeam: number;
  inProgress: boolean;
}

export interface IDataValuesTeams {
  teamName: string;
  id: number;
}
