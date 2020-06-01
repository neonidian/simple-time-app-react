import React, {useState, useEffect} from 'react';
import './TimeBasedOnIpAddress.css'

// TODO:
//  1. Split render and logic into separate components. Use Render props ?
//  2. Minimize number of times the page is rendered. Current. On page load: 10, on clicking 'Get current time' button: 8

const TimeBasedOnIpAddress = () => {
    let [timeInformation, setTimeInformation] =
        useState({
            datetime: undefined,
            client_ip: undefined
        });
    let [isRefreshButtonDisplayed, makeRefreshButtonDisplayed] = useState(false)
    let [isRefreshButtonDisabled, makeRefreshButtonDisabled] = useState(false)

    useEffect(() => {
            fetchTimeInformationFromApi();
        }, []
    );

    const fetchTimeInformationFromApi = () => {
        makeRefreshButtonDisabled(true);
        fetch('http://worldtimeapi.org/api/ip')
            .then(response => response.json())
            .then(data => {
                setTimeInformation(data);
                makeRefreshButtonDisplayed(true);
                makeRefreshButtonDisabled(false);
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
        <div className={"main"}>
            {toDisplay}
            <RefreshButton />
        </div>);
};

export default React.memo(TimeBasedOnIpAddress);
