import React from 'react';
// import {Typography} from '@material-ui/core';
import './Progress.css'

function Progress({attempt, guessList}){
    return (
        <div>
            {/* <Typography style={{marginTop:'50px'}}variant="h2">Guess {attempt} </Typography> */}
            <h2>Guess {attempt}</h2>
            <ul className="progressBar_history">
                {guessList}
            </ul>
        </div>
    )
}

export default Progress