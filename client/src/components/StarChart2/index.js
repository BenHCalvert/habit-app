import React, { useState, useEffect } from "react";
import GoldStar from '../GoldStar';
import DayOfWk from '../DayOfWk';

export function StarChart2() {
    const [days, setDays] = useState({
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false
    });

    const handleClick = day => {
        console.log(day);
        setDays({ ...days, [day]: true });
    };

    useEffect(() => {
        console.log(days);
    }, [days]);

    return (
        <React.Fragment>
            <div className='chartBorder'>
                <div className="Row">
                    <center><h6>Habit Name</h6></center>
                </div>
                <div className="row">
                    <div className="App">
                        {days.sunday ? (
                            <GoldStar />
                        ) : (
                                <DayOfWk day="sunday" handleClick={handleClick} />
                            )}
                        {days.monday ? (
                            <GoldStar />
                        ) : (
                                <DayOfWk day="monday" handleClick={handleClick} />
                            )}
                        {days.tuesday ? (
                            <GoldStar />
                        ) : (
                                <DayOfWk day="tuesday" handleClick={handleClick} />
                            )}
                        {days.wednesday ? (
                            <GoldStar />
                        ) : (
                                <DayOfWk day="wednesday" handleClick={handleClick} />
                            )}
                        {days.thursday ? (
                            <GoldStar />
                        ) : (
                                <DayOfWk day="thursday" handleClick={handleClick} />
                            )}
                        {days.friday ? (
                            <GoldStar />
                        ) : (
                                <DayOfWk day="friday" handleClick={handleClick} />
                            )}
                        {days.saturday ? (
                            <GoldStar />
                        ) : (
                                <DayOfWk day="saturday" handleClick={handleClick} />
                            )}
                    </div>


                </div>
                <center>
                    <div className="row">
                        <div className="col s3">
                            <a class="waves-effect waves-light btn-small amber lighten-2">Complete</a>
                        </div>
                        <div className="col s3 offset-s6">
                            <a class="waves-effect waves-light btn-small red darken-3">Missed</a>
                        </div>
                    </div>
                </center>
            </div>
        </React.Fragment>
    );
}

export default StarChart2;