import React, {useState, useEffect} from 'react';
import './TimeBasedOnLocation.css'

const TimeBasedOnLocation = () => {

    const [timeZoneInformation, setTimeZoneInformation] = useState("");
    const [selectedTimeZone, setSelectedTimeZone] = useState("");
    const [currentTimeByLocation, setCurrentTimeByLocation] = useState("");

    useEffect(() => fetchTimeZonesFromApi(), []);

    useEffect(() => {
        if(selectedTimeZone !== ""){
            setCurrentTimeByLocation("Loading...")
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
        const {value} = event.target;
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
            <div id={"drop-down-time-by-location"}>
                {dropDownPopulatedWithTimeZone}
            </div>
            <br /><br />
            <div id={"display-time-by-location"}>
                {displayTimeBasedOnLocation}
            </div>
        </div>
    );
};

export default TimeBasedOnLocation;
