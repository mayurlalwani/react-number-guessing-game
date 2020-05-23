import React from 'react';
import Form from './components/Form';
import './App.css';
import { generateRandomNumber } from './util';
import Progress from './components/Progress';
import PopUp from './components/Instructions';

class App extends React.Component {
  state = {
    actualNumber:generateRandomNumber(),
    guess:undefined,
    allGuess: [],
    attempt:0,
    feedbackMessage:'Guess a number...',
    feedbackColor: '#fff',
    seen:false
  }

  getFeedback = (diff) => {
    let feedbackMessage;
    let feedbackColor;

    if (diff === 0) {
      feedbackColor = '#000';
      feedbackMessage = 'Congratulations!!You Won!!!';
    } else if (diff < 4 && diff !== 0) {
      feedbackColor = '#ff5722';
      feedbackMessage = 'You are closer!!!';
    } else if (diff >= 4 && diff < 10) {
      feedbackColor = '#ff9800';
      feedbackMessage = 'You are close';
    } else if (diff >= 10 && diff < 20) {
      feedbackColor = '#ffeb38';
      feedbackMessage = 'Small';
    } else {
      feedbackColor = '#5bc0de';
      feedbackMessage = 'Too Small';
    }

    return {
      feedbackMessage,
      feedbackColor,
    };
  };

  updateAppState = (guess) => {
    console.log(this.state.actualNumber)
    const diff = Math.abs(guess - this.state.actualNumber);
    const { feedbackMessage, feedbackColor } = this.getFeedback(diff);
    this.setState(prev => ({
      guess,
      allGuess:[...prev.allGuess,{guess,feedbackColor}],
      attempt: prev.attempt+1,
      feedbackMessage,
      
    }))
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  render(){
    const guessList = this.state.allGuess.map((item, index)=>(
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ))
    return (
      <div className="container">
        <h1>Number Guessing Game</h1>
        
        <div className={`feedback ${this.state.feedbackMessage[0].toLowerCase()}`}>
              <h2>{this.state.feedbackMessage}</h2>
        </div>
        <Form returnGuess={value=>this.updateAppState(value)}/>
        <Progress feedbackMessage = {this.state.feedbackMessage}  attempt={this.state.attempt} guessList = {guessList} />
        <button onClick={this.togglePop}>How to Play?</button>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div>
      
    )
  } 
}

export default App;