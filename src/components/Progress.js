import React from 'react';
function Progress({attempt, guessList}){
    return (
        <>
            {/* <Typography style={{marginTop:'50px'}}variant="h2">Guess {attempt} </Typography> */}
            <h2>Total Guess: {attempt}</h2>
            <div className="guesses">
                <ul className="progressBar_history">
                All Guesses:-{guessList}
                </ul>
            </div>
        </>
    )
}

export default Progress