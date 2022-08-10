import express from 'express';
import { initRace } from './startup';
import { Driver } from "./models/driver";
import cors from 'cors';
import bodyParser from "body-parser";
import _ from "underscore";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
let race: Driver[];

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    race = initRace();
    console.log(' ----- NEW RACE BEGINS -----');
});

app.get("/api/drivers", (req, res) => {
    res.json({ race });
});

app.post("/api/drivers/overtake", (req, res) => {
    const driverIndex = _.findIndex(race, function(driver) { return driver.id == req.body.driverId });

    if(driverIndex !== 0) {
        race[driverIndex].place -= 1;
        race[driverIndex-1].place += 1;
    }

    race = _.sortBy(race, function(driver) { return driver.place; })

    res.sendStatus(200);
});
