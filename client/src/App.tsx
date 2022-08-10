import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import DriverPage from "./components/DriverPage";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/drivers" element={<DriverPage />} />
                    <Route path="*" element={<Navigate to="/drivers" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
