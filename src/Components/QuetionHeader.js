import React from 'react'
import Rating from './Atom-QuestionsHeader/Rating';

function QuestionHeader(props){
    return (
        <div className='question-header' data-testid="header">
            <h1 data-testid='question-heading'>Question {props.data.current_question_no} of {props.data.total_question_no}</h1>
            <p style={{color:'#a9aaa9'}} data-testid='question-category'>{unescape(props.data.category)}</p>
            <Rating difficulty={props.data.difficulty}/>
        </div>
    )
}

export default QuestionHeader;