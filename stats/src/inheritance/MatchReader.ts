import { CsvFileReader } from "./CsvFileReader";
import { Result } from "../Result";
import { dateStringToDate } from "../utils";

type Data = [Date, string, string, number, number, Result, string];

export class MatchReader extends CsvFileReader<Data> {
  mapRow(row: string[]): Data {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as Result, // Type assertion to say it's either 'H', 'A' or 'D'
      row[6]
    ]
  }
}