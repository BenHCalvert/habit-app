import React, { useState } from "react";
import GoldStar from '../GoldStar';
import DayOfWk from '../DayOfWk';

// initially set the element to be the day of the week
const element = useState(<DayOfWk/>);

// when the element is clicked on, swap DayOfWk for GoldStar
function selector() {
    if (click = true){
        element = <GoldStar/>
    }
}

export function StarChart2() {
    return (
        <React.Fragment>
            <div className='chartBorder'>
                <div className="Row">
                    <center><h6>Habit Name</h6></center>
                </div>
                <div className="row">
                    {/* 7 days go here */}
                    <div className="col s1" day='Su'>
                        {element}
                    </div>
                    <div className="col s1" day='Mo'>
                        {element}
                    </div>
                    <div className="col s1" day='Tu'>
                        {element}
                    </div>
                    <div className="col s1" day='We'>
                        {element}
                    </div>
                    <div className="col s1" day='Th'>
                        {element}
                    </div>
                    <div className="col s1" day='Fr'>
                        {element}
                    </div>
                    <div className="col s1" day='Sa'>
                        {element}
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