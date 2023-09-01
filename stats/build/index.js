"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Report_1 = require("./Report");
// non static
// Create object for 'DataReader' interface
//const csvFileReader = new CsvFileReader('football.csv');
// Create instance of MatchReader and pass in value for 'DataReader' interface
//const matchReader = new MatchReader(csvFileReader);
//matchReader.load();
// static
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
const report = Report_1.Report.consoleReport('Man United');
report.buildAndPrintReport(matchReader.matches);
