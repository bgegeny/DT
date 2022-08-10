import DriverItem from './DriverItem';
import React, { useState, useEffect } from 'react';


const DriverPage = () => {
    const [drivers, setDrivers] = useState([]);

    const getDrivers = () => {
        fetch("/api/drivers")
            .then((res) => res.json())
            .then((data) => setDrivers(data.race));
    }

    useEffect(() => {
        getDrivers();
    }, []);

    return (
        <>
            <h1
                className={"center"}
            >DIGITAL THINKERS - Test Exercise
            </h1>
            <div
                className="drivers"
            >
                {drivers.length && drivers.map((item) =>
                    <DriverItem
                        onChange={() => getDrivers()}
                        key={item.id}
                        driver={item}
                    />
                )}
            </div>
        </>
    );
}

export default DriverPage;
