import React, {useState, useEffect} from 'react';

const HomePage = () => {
    let [timeInformation, setTimeInformation] =
        useState({
            datetime: undefined,
            client_ip: undefined
        });

    useEffect(() => {
            fetch('http://worldtimeapi.org/api/ip')
                .then(response => response.json())
                .then(data => populateDataFromApi(data));
        }, []
    );

    let populateDataFromApi = data => setTimeInformation(data);

    const dataTestId = 'time-ip-address';
    let toDisplay =
        <p id={dataTestId} data-testid={dataTestId}>
            {timeInformation.datetime == undefined ?
                "Loading..."
                :
                `Time based on your public IP address (${timeInformation.client_ip}) : ${new Date(timeInformation.datetime).toTimeString()}`
            }
        </p>;

    return (
        <main>
            {toDisplay}
        </main>);
};

export default HomePage;
