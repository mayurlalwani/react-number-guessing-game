import React from 'react';

// import {TextField, Button } from '@material-ui/core';

function Form({returnGuess}){
    function handleChange(e){
        e.preventDefault();
        const guess = e.target.elements.guess.value;
        returnGuess(guess);

    }

    return (
        <form style={{marginTop: '20px'}} onSubmit={handleChange}>
            {/* <TextField style={{paddingBottom: '20px'}} fullWidth type="number" name="guess" label="Enter your guess..." required /> */}
            <input style={{paddingBottom: '20px'}} name="guess" label="Enter your guess..." required />
            <button>Submit</button>
            {/* <Button fullWidth variant="contained" color="primary">Submit</Button> */}
            
        </form>
    )
}

export default Form;