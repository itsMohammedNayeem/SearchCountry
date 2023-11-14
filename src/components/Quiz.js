import React, { Component } from "react";
import { QuizData } from "./QuizData";
import "./styles.css";

export class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAnswer: null, //current users answer
      currentIndex: 0, //current questions index
      options: [], //the four options
      quizEnd: false, //determines if it's the last question
      score: 0, //holds the score
      disabled: true, // determines the status of the buttons
    };
  }

  //Component that holds the current quiz
  //function is responsible for loading  a single question based on the currentIndex state
  //So it first gets the current index which is an integer value.
  //Then it reads the question on that index from the QuizData component.
  //Finally, using the values it read, it updates the question, options and answer state and returns them.

  loadQuiz = () => {
    const { currentIndex } = this.state; //get the current question index
    this.setState(() => {
      return {
        question: QuizData[currentIndex].question,
        options: QuizData[currentIndex].options,
        answer: QuizData[currentIndex].answer,
      };
    });
  };

  //this function obtains the user’s answer, the correct answer and the score. Then it increments the currentIndex.
  //Finally, it checks if the userAnswer is equal to the correct answer and if so, increments the score.

  nextQuestionHander = () => {
    const { userAnswer, answer, score } = this.state;
    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });
    //Check if correct answer and increment score
    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }
  };

  //This function executes when the user select an options.
  //It will set the userAnswer state and then enables the next button (disabled = false)

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  //This function simply checks if the quiz has gotten to the last question.
  //Then it sets the quizEnd state to true.

  finishHandler = () => {
    if (this.state.currentIndex === QuizData.length - 1) {
      this.setState({
        quizEnd: true,
      });
    }
  };

  componentDidMount() {
    this.loadQuiz();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          question: QuizData[currentIndex].question,
          options: QuizData[currentIndex].options,
          answer: QuizData[currentIndex].answer,
        };
      });
    }
  }

  render() {
    const { question, options, currentIndex, userAnswer, quizEnd } = this.state; //get the current state

    if (quizEnd) {
      return (
        <div>
          <h1>Game Over. Final score is {this.state.score} points</h1>
          <p>The correct Answers for the quiz are</p>
          <ul>
            {QuizData.map((item, index) => (
              <li className="ui floating message options" key={index}>
                {item.answer}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <div>
        <h2>{question}</h2>
        <span>{`Question ${currentIndex} of ${QuizData.length - 1}`}</span>
        {options.map(
          (
            option //for each option, new paragraph
          ) => (
            <p
              key={option.id}
              className={`ui floating message options
                ${userAnswer === option ? "selected" : null}
                `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          )
        )}
        {currentIndex < QuizData.length - 1 && (
          <button
            className="ui inverted button"
            disabled={this.state.disabled}
            onClick={this.nextQuestionHander}
          >
            Next Question
          </button>
        )}
        {currentIndex === QuizData.length - 1 && (
          <button
            className="ui inverted button"
            disabled={this.state.disabled}
            onClick={this.finishHandler}
          >
            Finish
          </button>
        )}
      </div>
    );
  }
}

export default Quiz;
