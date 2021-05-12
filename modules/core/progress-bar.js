import React from "react";

const ProgressBar = (props) => {
    return (
        <div className="progress_bar" style={{width: props.progressBarPercent+'%'}}></div>
    )
}
 export default ProgressBar;