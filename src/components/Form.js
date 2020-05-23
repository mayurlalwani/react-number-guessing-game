import React from 'react';

function Form({feedbackMsg,attempt,returnGuess}){
    console.log(attempt);

    function handleChange(e){
        e.preventDefault();
        const guess = e.target.elements.guess.value;
        returnGuess(guess);
        e.target.elements.guess.value = '';
    }

    return (
        <div className="form-container">
            
        <form style={{marginTop: '20px'}} onSubmit={handleChange}>
            {attempt === 10 ? 
                    <input disabled placeholder="You Lost!! Reset the game to play again!" />  :
                    
                    <input type="number" name="guess" placeholder="Guess a Number" required />     
            }
            
            <button>GUESS</button>
        </form>
        </div>
    )
}

export default Form;