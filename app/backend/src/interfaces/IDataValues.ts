export default interface IDataValues {
  id?: number;
  username: string;
  role: string;
  email: string;
  password?: string,
}

export interface IDataValuesMatches {
  homeTeamGoals: number;
}
