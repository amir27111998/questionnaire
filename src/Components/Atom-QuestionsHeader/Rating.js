import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

function difficulty(dif){
    // Starts Counter from 0 0->1
    let counter = 0;
    switch(dif){
        case 'medium':
            counter+=1;
            break;
        case 'hard':
            counter+=2;
            break;
    }
    let icons = [];
    for (let i = 0; i < 5; i++) {
        icons.push({i, counter});
    }
    return icons;
}

function Rating(props){
    return (
        <div data-testid='question-rating'>
            {difficulty(props.difficulty).map(({i, counter})=>{
                return <FontAwesomeIcon icon={faStar} key={i} color={i<=counter ? "#000000" : "#a9aaa9"} />
            })}
        </div>
    )
}

export default Rating;