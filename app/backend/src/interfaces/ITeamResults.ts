export interface IMatch {
  goalsFavor: number;
  goalsOwn: number;
}

export default interface IEntry {
  teamName: string;
  matches: IMatch[]
}
