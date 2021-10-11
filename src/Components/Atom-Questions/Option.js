import React from 'react'

function Option(props){
    return (
        <button className={'question-option '+props.className} 
        style={{marginRight: props.margin+'%'}} 
        onClick={(e)=>{
            props.selectOption(props.option)
        
        }}>{unescape(props.option)}</button>
    )
}

export default Option;