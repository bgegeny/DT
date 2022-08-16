import React from 'react';
import { Driver } from '../../../server/models/driver';

interface IMyProps {
    driver: Driver;
    onChange: (race: Object) => void;
}

const DriverItem: React.FC<IMyProps> = (props: IMyProps) => {

    const { id, firstname, lastname, team, code, place, country } = props.driver;

    const overtake = (driverId: number) => {
        fetch(`/api/drivers/overtake`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({driverId})
        }).then((res) => {
            if(!res.ok) {
                throw Error();
            }
            return res.json();
        }).then((data) => {
            props.onChange(data.race);
        })
    }

    return (
        <div className="driver center">
            <div>{`${firstname} ${lastname}`}</div>
            <div>{team}</div>
            <div className="bold">{place + 1}. place</div>
            <div>{code}</div>
            <img
                alt={`Portrait from ${firstname} ${lastname}`}
                className='driver_portrait'
                src={`../../images/portraits/${code.toLowerCase()}.png`}
            />
            <div
                className="flag-container"
            >
                <img
                    alt={`flag for country: ${country}`}
                    className="flag"
                    src={`https://countryflagsapi.com/png/${country}`}
                />
            </div>

            <button
                disabled={!place}
                onClick={() => {
                    overtake(id);
                }}
            >
                Overtake
            </button>
        </div>
    );
}

export default DriverItem;
