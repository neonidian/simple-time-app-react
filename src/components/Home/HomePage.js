import React, {useState, useEffect} from 'react';

const HomePage = () => {
    let [time, setTime] = useState('Loading');

    useEffect(() => {
            const fetchTime = fetch('http://worldtimeapi.org/api/ip')
                .then(response => response.json())
                .then(response => JSON.stringify(response));
            fetchTime.then(data => setTime(time = data));
        }, []
    );

    return (
        <main>
            {time}
        </main>);
};


export default HomePage;
