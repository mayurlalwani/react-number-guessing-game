import React from 'react';

function Progress({attempt, guessList}){
    return (
        <>
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