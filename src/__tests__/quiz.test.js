import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import PercentageProgress from '../Components/PercentageProgress'
import Progress from '../Components/Progress'
import Questions from '../Components/Questions'
import Header from '../Components/QuetionHeader'
import Quiz from '../Pages/Quiz'

test('Render Quiz Page and Testin all Components are Present', () => {
    render(<Quiz />)
    expect(screen.getByTestId('progress')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('questions')).toBeInTheDocument();
    expect(screen.getByTestId('percentage-progress')).toBeInTheDocument();
})


test('Loading Header Component With Dummy State and Checking Sub Components',()=>{
    let dummyState = {current_question_no: 1,
                      total_question_no: 20,
                      difficulty: 'hard', 
                      category: 'Animal'};
    const {getByTestId}=render(<Header data={dummyState} />)
    let heading = getByTestId('question-heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Question 1 of 20');
    let category = getByTestId('question-category');
    expect(category).toBeInTheDocument();
    expect(category).toHaveTextContent('Animal');
    let rating = getByTestId('question-rating');
    expect(rating).toBeInTheDocument();
})

test('Loading Questions Component With Dummy State and Selected Option',()=>{                  
    const {getByTestId}=render(<Questions question={'Dummy Question?'}
                                          options={{correct_answer: 'dummy',
                                          incorrect_answers: ['incorrect-1', 'incorrect-2', 'incorrect-3']}}
                                          selected={'dummy'}
                                          selectOption={()=>{}}
                                          nextQuestion = {()=>{}}
                                          disabled = {false}
                                          finish = {false}
                                />)
    let questions = getByTestId('questions');
    expect(questions).toBeInTheDocument();
    let question_text = getByTestId('question-text');
    expect(question_text).toHaveTextContent('Dummy Question?');
    let question_option = getByTestId('question-option');
    expect(question_option).toBeInTheDocument();
    let result = getByTestId('question-result');
    expect(result).toBeInTheDocument();
})


test('Loading Questions Component With Dummy State and No Option Selected',()=>{                  
    const {getByTestId}=render(<Questions question={'Dummy Question2?'}
                                          options={{correct_answer: 'dummy2',
                                          incorrect_answers: ['incorrect-1', 'incorrect-2', 'incorrect-3']}}
                                          selected={undefined}
                                          selectOption={()=>{}}
                                          nextQuestion = {()=>{}}
                                          disabled = {true}
                                          finish = {true}
                                />)
    let questions = getByTestId('questions');
    expect(questions).toBeInTheDocument();
    let question_text = getByTestId('question-text');
    expect(question_text).toHaveTextContent('Dummy Question2?');
    let question_option = getByTestId('question-option');
    expect(question_option).toBeInTheDocument();
    expect(questions).not.toContainHTML('<Result />');
})


test('Loading Percentage Component',()=>{
    const {getByTestId}=render(<PercentageProgress correct_percent={25}
                                    attempted_percent={67}
                                    max_score={75}
                                />);
    let questions = getByTestId('percentage-progress');
    expect(questions).toContainHTML(`<span>Score: 67%</span>`);
    expect(questions).toContainHTML(`<span style="right: 0px; position: absolute;">Max Score: 75%</span>`);
})