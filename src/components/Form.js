import React from 'react';

// import {TextField, Button } from '@material-ui/core';

function Form({returnGuess}){
    function handleChange(e){
        e.preventDefault();
        const guess = e.target.elements.guess.value;
        returnGuess(guess);
        e.target.elements.guess.value = ''
    }

    return (
        <div className="form-container">
            
        <form style={{marginTop: '20px'}} onSubmit={handleChange}>
            <input type="number" style={{paddingBottom: '20px'}} name="guess" placeholder="Guess a Number" required />
            <button>Guess</button>
            
            
        </form>
        </div>
    )
}

export default Form;