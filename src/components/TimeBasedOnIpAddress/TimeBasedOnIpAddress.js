import { memo, useState, useEffect } from 'react';
import './TimeBasedOnIpAddress.css'

const TimeBasedOnIpAddress = () => {
    // Declare React states
    const [timeInformation, setTimeInformation] =
        useState({
            datetime: undefined,
            client_ip: undefined
        });
    const [isRefreshButtonDisplayed, makeRefreshButtonDisplayed] = useState(false)
    const [isRefreshButtonDisabled, makeRefreshButtonDisabled] = useState(false)

    // React hook to perform operation when the page has mounted(or page loads)
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

    const displayTimeInformation = (timeInfo) =>
        <p>
            Time based on your public IP address ({timeInfo.client_ip})
            is <time>{(timeInfo.datetime).toString()}</time>
        </p>

    const dataTestId = 'time-ip-address';
    const toDisplay =
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

export default memo(TimeBasedOnIpAddress);
