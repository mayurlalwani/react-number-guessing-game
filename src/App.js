import React from 'react';
import Form from './components/Form'
// import { Grid, Typography, Paper, Divider} from '@material-ui/core';
import { generateRandomNumber} from './util';
import Progress from './components/Progress';

class App extends React.Component {
  state = {
    randomNumber:generateRandomNumber(),
    guess:undefined,
    allGuess: [],
    attempt:0

  }
  updateAppState = (guess) =>{
    
    console.log(guess);

    const diff = Math.abs(guess - this.state.randomNumber);
    this.setState(prev => ({
      guess,
      allGuess:[...prev.allGuess,{guess}],
      attempt: prev.attempt+1

    }))

  }
  render(){
    const guessList = this.state.allGuess.map((item, index)=>(
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ))
    return (
      <>
      {/* <Grid container style={{height: '100vh'}} justify="center" alignItems="center">
       <Grid item xs={3}>
           <Paper style={{padding: '50px'}} elevation={6}>
             <Typography align="center" variant="h2">Hot or Cold</Typography>
             <Divider style={{margin:'20px 0'}}></Divider> */}
             <Form returnGuess={value=>this.updateAppState(value)}/>
            
            <Progress attempt={this.state.attempt} guessList = {guessList} />
           {/* </Paper>
         </Grid>
       </Grid> */}
      </>
    )
  }
  
}

export default App;
