import React, {useState, useEffect} from 'react';
import './HomePage.css'

const HomePage = () => {
    let [timeInformation, setTimeInformation] =
        useState({
            datetime: undefined,
            client_ip: undefined
        });
    let [isRefreshButtonDisplayed, toggleRefreshButtonDisplayed] = useState(false)
    let [isRefreshButtonDisabled, toggleRefreshButtonDisabled] = useState(false)

    useEffect(() => {
            fetchTimeInformationFromApi();
        }, []
    );

    const fetchTimeInformationFromApi = () => {
        toggleRefreshButtonDisabled(true);
        fetch('http://worldtimeapi.org/api/ip')
            .then(response => response.json())
            .then(data => {
                setTimeInformation(data);
                toggleRefreshButtonDisplayed(true);
                toggleRefreshButtonDisabled(false);
            });
    }

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
        <button
            style={{ display: isRefreshButtonDisplayed? 'inline' : 'none'}}
            disabled={isRefreshButtonDisabled}
            id={'refresh-time'}
            onClick={fetchTimeInformationFromApi}>
            {isRefreshButtonDisabled ? 'Please wait' : 'Get Current Time'}
        </button>

    return (
        <main>
            {toDisplay}
            <RefreshButton />
        </main>);
};

export default HomePage;
