import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reports/ConsoleReport";
import { HtmlReport } from "./reports/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;  
}

export interface OutputTarget {
  print(report: string): void;
}

export class Report {
  static consoleReport(team: string): Report {
    return new Report(
      new WinsAnalysis(team),
      new ConsoleReport()
    );
  }

  constructor(
    public analyzer: Analyzer, 
    public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
