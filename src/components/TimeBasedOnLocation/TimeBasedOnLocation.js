import React, {useState, useEffect} from 'react';
import './TimeBasedOnLocation.css'

const TimeBasedOnLocation = () => {

    const [timeZoneInformation, setTimeZoneInformation] = useState("");
    let [selectedTimeZone, setSelectedTimeZone] = useState("");
    let [currentTimeByLocation, setCurrentTimeByLocation] = useState("");

    useEffect(() => fetchTimeZonesFromApi(), []);

    useEffect(() => {
        if(selectedTimeZone !== ""){
            fetch(`http://worldtimeapi.org/api/${selectedTimeZone}`)
                .then(response => response.json())
                .then(data => {
                    setCurrentTimeByLocation(data.datetime.toString());
                })
        }
        }, [selectedTimeZone]
    )


    const fetchTimeZonesFromApi = () => {
        fetch('http://worldtimeapi.org/api/timezone')
            .then(response => response.json())
            .then(data => {
                setTimeZoneInformation(data);
            });
    };

    const handleChange = (event) => {
        let {name, value} = event.target;
        setSelectedTimeZone(value);
    };

    const getAllTimeZones = () => timeZoneInformation.map(aTimeZone =>
        <option key={aTimeZone}
                value={aTimeZone}
        >
            {aTimeZone}
        </option>);

    const dropDownPopulatedWithTimeZone =
        timeZoneInformation === "" ?
            "Loading time zones, please wait..."
            :
            <select
                value={selectedTimeZone}
                onChange={handleChange}
                name="selectedTimeZone"
            >
                <option value={""}>** Select a time zone **</option>
                {getAllTimeZones()}
            </select>
    ;

    const displayTimeBasedOnLocation = selectedTimeZone === "" ? null
        :
        `Selected location is ${selectedTimeZone} and time now is ${currentTimeByLocation}`

    return (
        <div className={"time-by-location"}>
            <h2>Time based on location</h2>
            <div>
                {dropDownPopulatedWithTimeZone}
            </div>
            <div>
                {displayTimeBasedOnLocation}
            </div>
        </div>
    );
};

export default TimeBasedOnLocation;
