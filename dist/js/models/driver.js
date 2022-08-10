"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
class Driver {
    constructor(driver, place) {
        this.id = driver.id;
        this.code = driver.code;
        this.firstname = driver.firstname;
        this.lastname = driver.lastname;
        this.country = driver.country;
        this.team = driver.team;
        this.place = place;
    }
}
exports.Driver = Driver;
