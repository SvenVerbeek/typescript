import { MatchData } from "../MatchData";
import { Result } from "../Result";
import { Analyzer } from "../Report";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let totalWins = 0;
    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === Result.HomeWin) {
        totalWins++;
      } else if (match[2] === 'Man United' && match[5] === Result.AwayWin) {
        totalWins++;
      }
    }
    return `Team ${this.team} won ${totalWins} games`;
  }
}