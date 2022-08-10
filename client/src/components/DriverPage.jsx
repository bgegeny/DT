import DriverItem from './DriverItem';
import React, { useState, useEffect } from 'react';
import './style/DriverPage.css';


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
            <header
            >
                <img
                    alt="Digital Thinkers Logo"
                    src="../../images/DT_header.png"
                />
                <div>
                    Test Exercise
                </div>
            </header>
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
            <footer>
                Created By Benjamin Gégény
            </footer>
        </>
    );
}

export default DriverPage;
