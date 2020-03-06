import React from "react";
import "./style.css";

export function StarChartxx() {
  return (
    <React.Fragment>
      <div className='chartBorder'>
        <div className="Row">
          <center><h6>Habit Name</h6></center>
        </div>
        <div className="row">
        <input name="group1" type="radio" checked />
          <span className="starRating">
            {/* 7 days go here */}
            <div className="col s1">
              <span className="starRating">
                <input id="rating7" type="radio" name="rating" value="7"></input>
                <label for="rating7">7</label>
              </span>
            </div>
            <div className="col s1">
              <input id="rating6" type="radio" name="rating" value="6"></input>
              <label for="rating6">6</label>
            </div>
            <div className="col s1">
              <input id="rating5" type="radio" name="rating" value="5"></input>
              <label for="rating5">5</label>
            </div>
            <div className="col s1">
              <input id="rating4" type="radio" name="rating" value="4"></input>
              <label for="rating4">4</label>
            </div>
            <div className="col s1">
              <input id="rating3" type="radio" name="rating" value="3"></input>
              <label for="rating3">3</label>
            </div>
            <div className="col s1">
              <input id="rating2" type="radio" name="rating" value="2"></input>
              <label for="rating2">2</label>
            </div>
            <div className="col s1">
              <input id="rating1" type="radio" name="rating" value="1"></input>
              <label for="rating1">1</label>
            </div>
          </span>
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

export default StarChartxx;
