import React, { useState, useEffect } from "react";
import { UPDATE_HABIT, SET_CURRENT_HABIT } from "../../utils/actions";
import API from "../../utils/API";
import GoldStar from '../GoldStarOfficial';
import DayOfWk from '../DayOfWk';

export function StarChart(props) {
    const [days, setDays] = useState({
        sunday: props.week.sunday,
        monday: props.week.monday,
        tuesday: props.week.tuesday,
        wednesday: props.week.wednesday,
        thursday: props.week.thursday,
        friday: props.week.friday,
        saturday: props.week.saturday
    });

    console.log('props', props);

    const handleClick = (day) => {
        console.log(day);
        console.log('state value', days[day])
        if (days[day] === false) {
            setDays({ ...days, [day]: true });
        } if (days[day] === true) {            
            setDays({ ...days, [day]: false });
        }  
  

        console.log("Updating existing", days[day])
        API.updateHabit({
            week: {
                sunday: days[day],
                monday: days[day],
                tuesday: days[day],
                wednesday: days[day],
                thursday: days[day],
                friday: days[day],
                saturday: days[day]
            },
            _id: props.id
        })
        .then(console.log('days updateAPI', days))
        .catch(err => console.log(err));
    };

    useEffect(() => {
        console.log(days);
    }, [days]);

    return (
        <React.Fragment>
            <div className='chartBorder'>
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
                                    <GoldStar day='saturday' handleClick={handleClick} />
                                ) : (
                                        <DayOfWk day="saturday" handleClick={handleClick} />
                                    )}
                            </div>
                        </div>
                    </center>


                </div>
            </div>
        </React.Fragment>
    );
}

export default StarChart;