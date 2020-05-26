import React, {useState, useEffect} from 'react';

const HomePage = () => {
    const initialDisplayText = 'Loading';
    let [time, setTime] = useState({datetime: initialDisplayText});

    useEffect(() => {
            const fetchTime = fetch('http://worldtimeapi.org/api/ip')
                .then(response => response.json());
            fetchTime.then(data => setTime(time = data));
        }, []
    );

    let toDisplay = time.datetime === initialDisplayText ?
        <p id={'time-ip-address'}>
            Loading...
        </p>
        :
        <p id={'time-ip-address'}>Time based on your public IP address ({time.client_ip}):
            <strong>{new Date(time.datetime).toTimeString()}</strong>
        </p>;

    return (
        <main>
            {toDisplay}
        </main>);
};

export default HomePage;
