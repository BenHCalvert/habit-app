import React, { useState, useEffect } from "react";
import { UPDATE_HABIT, SET_CURRENT_HABIT } from "../../utils/actions";
import API from "../../utils/API";
import GoldStar from '../GoldStarOfficial';
import DayOfWk from '../DayOfWk';

export function StarChart(props) {
    const [days, setDays] = useState({
        sunday: props.sunday,
        monday: props.monday,
        tuesday: props.tuesday,
        wednesday: props.wednesday,
        thursday: props.thursday,
        friday: props.friday,
        saturday: props.saturday
    });

    const handleClick = (day, e) => {        
        console.log(day);
        console.log('state value', days[day])
        if (days[day] === false) {
            setDays({ ...days, [day]: true });
        } if (days[day] === true) {
            setDays({ ...days, [day]: false });
        }

        // BELOW THIS IS FROM Gabe's CreateHabitForm
        // Functions to make API calls when user changes day of week to star
        e.preventDefault();
     
      console.log("Updating existing", days[day])

      API.updateHabit({
        week.sunday: days[day],
        week.monday: days[day], 
        week.tuesday: days[day], 
        week.wednesday: days[day], 
        week.thursday: days[day], 
        week.friday: days[day], 
        week.saturday: days[day],  
        _id: formInput._id,
        date: formInput.date,
        userId: "userId1",
        habitName: formInput.habitName,
        dayTotal: formInput.dayTotal,
        weight: formInput.weight
      })
      .then(res => {
        console.log("Habit update res",res);
        dispatch({
          type: UPDATE_HABIT,
          habit: res.data
        });
      })
      .catch(err => console.log(err));   

    
    dispatch({
      type: SET_CURRENT_HABIT,
      habit: {}
    })

    setFormInput({});
    e.target.habitName.value = "";
    e.target.weight.value = "";
    e.target.dayTotal.value = "";
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