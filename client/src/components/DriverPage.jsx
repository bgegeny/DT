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
            <button
                onClick={() => getDrivers()}
            >
                REFRESH
            </button>
            <div
                className="drivers"
            >
                {drivers.length && drivers.map((item) =>
                    <DriverItem
                        key={item.id}
                        driver={item}
                    />
                )}
            </div>
        </>
    );
}

export default DriverPage;
