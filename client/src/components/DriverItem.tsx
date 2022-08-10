import React from 'react';
import { Driver } from '../../../server/models/driver';

interface IMyProps {
    driver: Driver;
    onChange: () => void;
}

const DriverItem: React.FC<IMyProps> = (props: IMyProps) => {

    const { id, firstname, lastname, team, code, place } = props.driver;

    const overtake = (driverId: number) => {
        fetch(`/api/drivers/overtake`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({driverId})
        }).then((data) => {
            if(!data.ok) {
                throw Error();
            }
            props.onChange();
        });
    }

    return (
        <div className="driver center">
            <div>{`${firstname} ${lastname}`}</div>
            <div>{team}</div>
            <div className="bold">{place + 1}. place</div>
            <div>{code}</div>
            <div>
                <img
                    alt={`Portrait from ${firstname} ${lastname}`}
                    className='driver_portrait'
                    src={`../../images/portraits/${code.toLowerCase()}.png`}
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
