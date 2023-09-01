"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const Result_1 = require("../Result");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let totalWins = 0;
        for (let match of matches) {
            if (match[1] === 'Man United' && match[5] === Result_1.Result.HomeWin) {
                totalWins++;
            }
            else if (match[2] === 'Man United' && match[5] === Result_1.Result.AwayWin) {
                totalWins++;
            }
        }
        return `Team ${this.team} won ${totalWins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
