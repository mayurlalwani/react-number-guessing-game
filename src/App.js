import React from 'react';
import Form from './components/Form';
import './App.css';
import Progress from './components/Progress';
import PopUp from './components/Instructions';
import { initialState } from './util';

class App extends React.Component {
  state = initialState();

  getFeedback = (diff) => {
    let feedbackMessage;
    let feedbackColor;

    if (diff === 0) {
      feedbackColor = 'green';
      feedbackMessage = 'Congratulations!!You Won!!!';
    } else if (diff < 4 && diff !== 0) {
      feedbackColor = 'maroon';
      feedbackMessage = 'You are closer!!!';
    } else if (diff >= 4 && diff < 10) {
      feedbackColor = 'yellow';
      feedbackMessage = 'You are close';
    } else if (diff >= 10 && diff < 20) {
      feedbackColor = 'red';
      feedbackMessage = 'Small';
    } else {
      feedbackColor = 'white';
      feedbackMessage = 'Too Small';
    }

    return {
      feedbackMessage,
      feedbackColor,
    };
  };

  updateAppState = (guess) => {
    console.log(this.state.actualNumber);
    const diff = Math.abs(guess - this.state.actualNumber);
    const { feedbackMessage, feedbackColor } = this.getFeedback(diff);
    this.setState(prev => ({
      guess,
      allGuess:[...prev.allGuess,{guess,feedbackColor}],
      attempt: prev.attempt+1,
      feedbackMessage,
      feedbackColor
    }))
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  resetGame = () => {
    this.setState(initialState());
  }

  render(){
    const guessList = this.state.allGuess.map((item, index)=>(
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ))
    return (
      <div className="container">
        <h1>Number Guessing Game</h1>
        
        <div className={`${this.state.feedbackMessage.toLowerCase()}`}>
              <h2 className={this.state.feedbackColor}>{this.state.feedbackMessage}</h2>
              
        </div>
        <Form feedbackMsg= {this.state.feedbackMessage} attempt={this.state.attempt} returnGuess={value=>this.updateAppState(value)}/>
        <Progress feedbackMessage = {this.state.feedbackMessage}  attempt={this.state.attempt} guessList = {guessList} />
        
        <button onClick={this.togglePop}>How to Play?</button>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
        <button onClick={this.resetGame}>Reset Game</button>
      </div>
      
    )
  } 
}

export default App;