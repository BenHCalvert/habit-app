import React from "react";

export function ActionBtn() {
    return (
        <div class="fixed-action-btn">
            <a class="btn-floating btn-large red" >
                <i class="large material-icons">mode_edit</i>
            </a>
            <ul>
                <li><a class="btn-floating green"><i class="material-icons">event</i></a></li>
                <li><a class="btn-floating yellow darken-1"><i class="material-icons">free_breakfast</i></a></li>
            </ul>
        </div>

    );
}

export default ActionBtn;