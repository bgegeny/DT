"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRace = void 0;
const drivers_json_1 = __importDefault(require("./db/drivers.json"));
const underscore_1 = __importDefault(require("underscore"));
const driver_1 = require("./models/driver");
const initRace = () => {
    const currentRacers = [];
    underscore_1.default.shuffle(drivers_json_1.default).forEach((driver, i) => {
        currentRacers.push(new driver_1.Driver(driver, i));
    });
    return currentRacers;
};
exports.initRace = initRace;
