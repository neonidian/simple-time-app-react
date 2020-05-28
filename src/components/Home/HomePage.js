import React, {useState, useEffect} from 'react';
import './HomePage.css'

const HomePage = () => {
    let [timeInformation, setTimeInformation] =
        useState({
            datetime: undefined,
            client_ip: undefined
        });

    useEffect(() => {
            fetchTimeInformationFromApi();
        }, []
    );

    const fetchTimeInformationFromApi = () => {
        fetch('http://worldtimeapi.org/api/ip')
            .then(response => response.json())
            .then(data => populateDataFromApi(data));
    }

    let populateDataFromApi = data => setTimeInformation(data);
    let displayTimeInformation = (timeInfo) =>
        <p>
            Time based on your public IP address ({timeInfo.client_ip})
            is <time>{new Date(timeInfo.datetime).toTimeString()}</time>
        </p>

    const dataTestId = 'time-ip-address';
    let toDisplay =
        <div id={dataTestId} data-testid={dataTestId}>
            {
                timeInformation.datetime === undefined ?
                    "Loading..."
                    :
                    displayTimeInformation(timeInformation)
            }
        </div>;

    const RefreshButton = () =>
        <button id={'refresh-time'} onClick={fetchTimeInformationFromApi}>
            Get Current Time
        </button>

    return (
        <main>
            {toDisplay} <RefreshButton />
        </main>);
};

export default HomePage;
