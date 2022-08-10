import DriverItem from './DriverItem';
import React, { useState, useEffect } from 'react';


const DriverPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/drivers")
            .then((res) => res.json())
            .then((data) => setData(data.race));
    }, []);

    return (
        <div
            className="drivers"
        >
            {data.length && data.map((item) =>
                <DriverItem
                    key={item.id}
                    driver={item}
                />
            )}
        </div>
    );
}

export default DriverPage;
