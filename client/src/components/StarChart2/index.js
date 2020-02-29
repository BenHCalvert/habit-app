import React from "react";
import GoldStar from "./goldStar.png";

// **************************8

// function addStar() {
//     e.preventDefault();
//     console.log('Click');
// }


export function StarChart2() {
    return (
        <React.Fragment>
            <div className='chartBorder'>
                <div className="Row">
                    <center><h6>Habit Name</h6></center>
                </div>
                <div className="row">
                    {/* 7 days go here */}
                    <div className="col s1" data-value='Su'>
                        <div visible={false}></div>
                        <img src={GoldStar} alt='gold star' height='35' onClick={addStar} visible={true}></img>
                    </div>
                    <div className="col s1" data-value='M'>
                        <img src={GoldStar} alt='gold star' height='35' onClick={addStar}></img>
                    </div>
                    <div className="col s1" data-value='T'>
                        <img src={GoldStar} alt='gold star' height='35' onClick={addStar}></img>
                    </div>
                    <div className="col s1" data-value='W'>
                        <img src={GoldStar} alt='gold star' height='35' onClick={addStar}></img>
                    </div>
                    <div className="col s1" data-value='R'>
                        <img src={GoldStar} alt='gold star' height='35' onClick={addStar}></img>
                    </div>
                    <div className="col s1" data-value='F'>
                        <img src={GoldStar} alt='gold star' height='35' onClick={addStar}></img>
                    </div>
                    <div className="col s1" data-value='Sa'>
                        <img src={GoldStar} alt='gold star' height='35' onClick={addStar}></img>
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