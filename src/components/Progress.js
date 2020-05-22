import React from 'react';
function Progress({attempt, guessList}){
    return (
        <div>
            {/* <Typography style={{marginTop:'50px'}}variant="h2">Guess {attempt} </Typography> */}
            <h2>Total Guess: {attempt}</h2>
            <ul className="progressBar_history">
            All Guesses:-{guessList}
            </ul>
        </div>
    )
}

export default Progress