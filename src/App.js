import React from 'react';
import Header from './components/Header/Header';
import TimeBasedOnIpAddress from './components/TimeBasedOnIpAddress/TimeBasedOnIpAddress';
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <TimeBasedOnIpAddress />
            <Footer />
        </>
    );
}

export default App;
