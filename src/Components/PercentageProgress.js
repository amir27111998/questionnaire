import React from "react";

function PercentageProgress(props){
    let wrongPercent = props.attempted_percent-props.correct_percent;
    let singleCorrectAttempt = (100 - props.attempted_percent) / 5;
    return (
        <div data-testid="percentage-progress">
            <div id="percentage-section-text">
                <span>Score: {Math.round(props.attempted_percent,2)}%</span>
                <span style={{right:0, position:'absolute'}}>Max Score: {Math.round(props.max_score,2)}%</span>
            </div>
            <div id="percentage-progress">
                <div className='percentage-progress-fill' style={{width: props.correct_percent+'%', backgroundColor:'#000000'}}>
                </div>
                <div className='percentage-progress-fill' style={{width: wrongPercent+'%', backgroundColor:'#717171'}}>
                </div>
                <div className='percentage-progress-fill' style={{width: singleCorrectAttempt+'%', backgroundColor:'#e5e6e5'}}>
                </div>
            </div>
        </div>
    )
}

export default PercentageProgress; 