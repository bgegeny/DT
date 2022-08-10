import React from 'react';
import { Driver } from '../../../server/models/driver';
import './style/Driver.css';

interface IMyProps {
    driver: Driver;
}

const DriverItem: React.FC<IMyProps> = (props: IMyProps) => {

    return (
        <div className="driver center">
            <div>{`${props.driver.firstname} ${props.driver.lastname}`}</div>
            <div>{props.driver.team}</div>
            <div>{props.driver.code}</div>
            <div className="bold">{props.driver.place}</div>
            <div>
                <img
                    className='driver_portrait'
                    src={`../../images/${props.driver.code.toLowerCase()}.png`}
                />
            </div>
            <button
                onClick={() => {
                    console.log('Overtake!!!');
                }}
            >
                Overtake
            </button>


        </div>
    );
}

export default DriverItem;
