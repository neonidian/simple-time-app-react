import React, {useState, useEffect} from 'react';

const HomePage = () => {
    let [time, setTime] = useState({datetime: 'Loading'});

    useEffect(() => {
            const fetchTime = fetch('http://worldtimeapi.org/api/ip')
                .then(response => response.json());
            fetchTime.then(data => setTime(time = data));
        }, []
    );

    let toDisplay = time.datetime === 'Loading' ? 'Loading...' :
        <p>Time based on IP address: <strong>{new Date(time.datetime).toTimeString()}</strong></p>;

    return (
        <main>
            {toDisplay}
        </main>);
};

export default HomePage;
