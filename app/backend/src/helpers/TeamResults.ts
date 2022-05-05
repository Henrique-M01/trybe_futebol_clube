import IEntry, { IMatch } from '../interfaces/ITeamResults';

export default class TeamResults {
  // Classe construida com ajuda e dicas do Leandro Oliveira;
  public name: string;

  public totalPoints: number;

  public totalGames: number;

  public totalVictories: number;

  public totalDraws: number;

  public totalLosses: number;

  public goalsFavor: number;

  public goalsOwn: number;

  public goalsBalance: number;

  public efficiency: number;

  constructor({ teamName, matches }: IEntry) {
    this.name = teamName;
    this.totalPoints = TeamResults.calculatePoints(matches);
    this.totalGames = matches.length;
    this.totalVictories = TeamResults.calculateVictories(matches);
    this.totalDraws = TeamResults.calculateDraws(matches);
    this.totalLosses = TeamResults.calculateLosses(matches);
    this.goalsFavor = TeamResults.calculateGoalsFavor(matches);
    this.goalsOwn = TeamResults.calculateGoalsOwn(matches);
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.efficiency = TeamResults.calculateEfficiency(this.totalGames, this.totalPoints);
  }

  private static calculatePoints(matches: IMatch[]): number {
    return matches.reduce((totalPoints, { goalsFavor, goalsOwn }) => {
      if (goalsFavor === goalsOwn) return totalPoints + 3;
      if (goalsFavor > goalsOwn) return totalPoints + 1;
      return totalPoints;
    }, 0);
  }

  private static calculateVictories(matches: IMatch[]): number {
    return matches.reduce((totalVictories, { goalsFavor, goalsOwn }) => {
      if (goalsOwn < goalsFavor) return totalVictories + 1;
      return totalVictories;
    }, 0);
  }

  private static calculateDraws(matches: IMatch[]): number {
    return matches.reduce((totalDraws, { goalsFavor, goalsOwn }) => {
      if (goalsOwn === goalsFavor) return totalDraws + 1;
      return totalDraws;
    }, 0);
  }

  private static calculateLosses(matches: IMatch[]): number {
    return matches.reduce((totalLosses, { goalsFavor, goalsOwn }) => {
      if (goalsOwn > goalsFavor) return totalLosses + 1;
      return totalLosses;
    }, 0);
  }

  private static calculateGoalsFavor(matches: IMatch[]): number {
    return matches.reduce((totalGoals, { goalsFavor }) => totalGoals + goalsFavor, 0);
  }

  private static calculateGoalsOwn(matches: IMatch[]): number {
    return matches.reduce((totalGoals, { goalsOwn }) => totalGoals + goalsOwn, 0);
  }

  private static calculateEfficiency(games: number, points: number): number {
    const calculationEfficiency = (100 * points) / (games * 3);

    if (calculationEfficiency - Math.round(calculationEfficiency) === 0) {
      return calculationEfficiency;
    }

    if (calculationEfficiency < 10) {
      return Number(calculationEfficiency.toPrecision(3));
    }

    return Number(calculationEfficiency.toPrecision(4));
  }
}
