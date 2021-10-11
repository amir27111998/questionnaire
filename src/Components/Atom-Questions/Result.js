import React from 'react'

function Result(props){
    return (
        <div data-testid="question-result">
            <h1 style={{textAlign:'center'}}>{props.selected === props.correct_answer ? 'Correct' : 'Sorry!'}</h1>
            <button id="next" onClick={()=>props.nextFunc()}>{props.finish ? 'Finish' : 'Next Question'}</button>
        </div>
    )
}

export default Result;