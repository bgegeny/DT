import React from 'react';
import { Driver } from "../../server/models/driver";
import DriverItem from "./components/Driver";

function App() {
  const [data, setData] = React.useState<Driver[]>([]);

  React.useEffect(() => {
    fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.race));
  }, []);

  return (
      <div className="App">
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
      </div>
  );
}

export default App;
