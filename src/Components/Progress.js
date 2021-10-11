import React from 'react'

function Progress(props){
    return (
        <div className='progress-container' data-testid="progress">
            <div className='progress-fill' style={{width: props.progress+'%', backgroundColor:'#a9aaa9'}}>
            </div>
        </div>
    )
}

export default Progress;