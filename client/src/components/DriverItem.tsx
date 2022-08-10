import React from 'react';
import { Driver } from '../../../server/models/driver';
import './style/Driver.css';

interface IMyProps {
    driver: Driver;
    onChange: () => void;
}

const DriverItem: React.FC<IMyProps> = (props: IMyProps) => {

    const overtake = (driverId: number) => {
        fetch(`/api/drivers/overtake`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({driverId})
        }).then(() => {
            props.onChange();
        });
    }

    return (
        <div className="driver center">
            <div>{`${props.driver.firstname} ${props.driver.lastname}`}</div>
            <div>{props.driver.team}</div>
            <div>{props.driver.code}</div>
            <div className="bold">{props.driver.place +1 }</div>
            <div>
                <img
                    alt={`Portrait from ${props.driver.firstname} ${props.driver.lastname}`}
                    className='driver_portrait'
                    src={`../../images/${props.driver.code.toLowerCase()}.png`}
                />
            </div>
            {
                props.driver.place ?

                    <button
                        onClick={() => {
                            overtake(props.driver.id);
                        }}
                    >
                        Overtake
                    </button> : undefined
            }


        </div>
    );
}

export default DriverItem;
