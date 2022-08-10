import express from 'express';
import { initRace } from './startup';
import { Driver } from "./models/driver";
import cors from 'cors';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
let race: Driver[];

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    race = initRace();
});

app.get("/api/drivers", (req, res) => {
    res.json({ race });
});

// app.post(`/api/drivers/${driverId}/overtake`, (req, res) => {
//     res.json({ message: console.log('Overtake') });
// });
