import React, { useState, useEffect } from "react";
import GoldStar from '../GoldStar';
import DayOfWk from '../DayOfWk';

export function StarChart() {
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
        // days.map( day => (
        //     console.log("here",[day],day)
        // ));
        console.log(day);
        console.log('state value', days[day])
        if (days[day] === false) {
            setDays({ ...days, [day]: true });
        } if (days[day] === true) {
            setDays({ ...days, [day]: false });
        }
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
                    <center>
                    <div className="Habit">
                        <div className="col s1">
                            {days.sunday ? (
                                <GoldStar day="sunday" handleClick={handleClick} />
                            ) : (
                                    <DayOfWk day="sunday" handleClick={handleClick} />
                                )}
                        </div>
                        <div className="col s1">
                            {days.monday ? (
                                <GoldStar day="monday" handleClick={handleClick} />
                            ) : (
                                    <DayOfWk day="monday" handleClick={handleClick} />
                                )}
                        </div>
                        <div className="col s1">
                            {days.tuesday ? (
                                <GoldStar day='tuesday' handleClick={handleClick} />
                            ) : (
                                    <DayOfWk day="tuesday" handleClick={handleClick} />
                                )}
                        </div>
                        <div className="col s1">
                            {days.wednesday ? (
                                <GoldStar day='wednesday' handleClick={handleClick} />
                            ) : (
                                    <DayOfWk day="wednesday" handleClick={handleClick} />
                                )}
                        </div>
                        <div className="col s1">
                        {days.thursday ? (
                            <GoldStar day='thursday' handleClick={handleClick} />
                        ) : (
                                <DayOfWk day="thursday" handleClick={handleClick} />
                            )}
                        </div>
                        <div className="col s1">
                            {days.friday ? (
                                <GoldStar day='friday' handleClick={handleClick} />
                            ) : (
                                    <DayOfWk day="friday" handleClick={handleClick} />
                                )}
                        </div>
                        <div className="col s1">
                            {days.saturday ? (
                                <GoldStar day='saturday' handleClick={handleClick}   />
                            ) : (
                                    <DayOfWk day="saturday" handleClick={handleClick} />
                                )}
                        </div>
                    </div>
                    </center>


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
export default StarChart;
