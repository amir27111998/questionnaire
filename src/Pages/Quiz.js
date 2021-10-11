import React, { Component } from 'react'
import Progress from '../Components/Progress'
import Header from '../Components/QuetionHeader'
import Questions from '../Components/Questions'
import PercentageProgress from '../Components/PercentageProgress'
import data from '../questions.json'

const index = 0;
const initialState={
            questions : data,
            index : index,
            current_question: data[index],
            current_question_no : 1,
            correct: 0,
            attempted: 0,
            progress: 0,
            disabled: false,
            selected: undefined,
            finish: false
        };

class Quiz extends Component{
    constructor(props){
        super(props);
        
        this.state={
            ...initialState
        }
    }

    selectOption=(selected)=>{
        this.setState((prevState)=>{
            return{
                disabled: true,
                selected: selected,
            }
        });
    }

    nextQuestion=()=>{
        if(this.state.finish){
            alert('Correct Answers '+(this.state.correct+1)+' Out of '+(this.state.attempted+1));
            alert('Response is Recorded \nQuiz will be Reloaded.');
            this.setState((prevState)=>{
                return{
                    ...initialState,
                }
            })
        }else{
            this.setState((prevState)=>{
                return{
                    index: prevState.index+1,
                    current_question: data[prevState.index+1],
                    current_question_no: prevState.current_question_no+1,
                    attempted: prevState.attempted + 1,
                    correct: prevState.selected === prevState.current_question.correct_answer ? prevState.correct + 1 : prevState.correct,
                    progress: ((prevState.attempted + 1)/prevState.questions.length)*100,
                    selected: undefined,
                    disabled: false,
                    finish: prevState.index+1===prevState.questions.length-1 ? true : false
                }
            });
        }
    }


    render(){
        return(
            <div>
                <Progress progress={this.state.progress} />
                <Header data={{current_question_no: this.state.current_question_no,
                               total_question_no:this.state.questions.length,
                               difficulty:this.state.current_question.difficulty, 
                               category:this.state.current_question.category}} />
                <Questions question={this.state.current_question.question}
                            options={{correct_answer: this.state.current_question.correct_answer,
                                     incorrect_answers: this.state.current_question.incorrect_answers}}
                            selected={this.state.selected}
                            selectOption={this.selectOption}
                            nextQuestion = {this.nextQuestion}
                            disabled = {this.state.disabled}
                            finish = {this.state.finish}

                />
                <PercentageProgress correct_percent={(this.state.correct / this.state.questions.length)*100}
                                    attempted_percent={this.state.attempted && (this.state.correct / this.state.attempted)*100}
                                    max_score={((this.state.correct + (this.state.questions.length - this.state.attempted)) / this.state.questions.length)*100}
                                    />
            </div>
        )
    }
}

export default Quiz;