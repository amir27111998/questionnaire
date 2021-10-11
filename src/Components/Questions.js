import React from 'react'
import Option from './Atom-Questions/Option';
import Result from './Atom-Questions/Result';

function parseOptions(options){
    let opts = [options.correct_answer, ...options.incorrect_answers];
    return opts;
}

function Questions(props){
    return (
        <div className='question-section' data-testid="questions">
            <p data-testid="question-text">{unescape(props.question)}</p>
            <div className='question-option-section' data-testid="question-option">
                {parseOptions(props.options).map((option,index) => {
                    return <Option option={option} key={option}  className={props.selected===option ? 'selected' : 
                                                                            props.disabled&&option!==props.options.correct_answer ?'disabled':
                                                                            props.disabled?'disabled-correct-answer':''}
                                   margin={(index+1)%2==0 ? 0 : 30} selectOption={props.selectOption} />
                })}
            </div>
            {props.selected !== undefined && <Result selected={props.selected}
                                                    nextFunc={props.nextQuestion} 
                                                    correct_answer={props.options.correct_answer}
                                                    finish={props.finish}
                                                    />}
        </div>
    )
}

export default Questions; 