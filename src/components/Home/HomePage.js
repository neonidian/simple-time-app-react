import React, {useState, useEffect} from 'react';

const HomePage = () => {
    let [timeInformation, setTimeInformation] = useState({});

    useEffect(() => {
            fetch('http://worldtimeapi.org/api/ip')
                .then(response => response.json())
                .then(data => populateDataFromApi(data));
        }, []
    );

    let populateDataFromApi = data => setTimeInformation(data);

    let toDisplay =
        <p id={'time-ip-address'}>
            {Object.keys(timeInformation).length === 0 ?
                "Loading..."
                :
                `Time based on your public IP address (${timeInformation.client_ip}) : 
                ${new Date(timeInformation.datetime).toTimeString()}`
            }
        </p>;

    return (
        <main>
            {toDisplay}
        </main>);
};

export default HomePage;
