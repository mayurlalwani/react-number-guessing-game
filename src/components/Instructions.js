import React, { Component } from "react";

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <h2>INSTRUCTIONS</h2>
          <ol>
              <li>You need to gues a random number between 1 to 100 within 10 tries.</li>
              
              <li>You will get feedback on how close or far your guess is in the form of the following keywords ("Small", "Too Small", "You are close", "You are closer!!!").</li>
          </ol>
          <span className="close" onClick={this.handleClick}>
            Let's Play!!
          </span>
        </div>
        
      </div>
    );
  }
}
