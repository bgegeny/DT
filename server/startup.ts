import drivers from './db/drivers.json'
import _ from 'underscore';
import { Driver } from './models/driver';

export const initRace = () => {
    const currentRacers: Driver[] = [];

    _.shuffle(drivers).forEach((driver, i: number) => {
        currentRacers.push(new Driver(driver, i));
    });

    return currentRacers;
};
