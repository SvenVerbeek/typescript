import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reports/ConsoleReport";
import { HtmlReport } from "./reports/HtmlReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Report } from "./Report";

// non static
// Create object for 'DataReader' interface
//const csvFileReader = new CsvFileReader('football.csv');

// Create instance of MatchReader and pass in value for 'DataReader' interface
//const matchReader = new MatchReader(csvFileReader);
//matchReader.load();

// static
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const report = Report.consoleReport('Man United')
report.buildAndPrintReport(matchReader.matches);

