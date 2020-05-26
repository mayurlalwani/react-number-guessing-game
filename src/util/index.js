export const generateRandomNumber = () => Math.floor(Math.random() *100 ) +1;

export const initialState = () => ({
    actualNumber:generateRandomNumber(),
    guess:undefined,
    allGuess: [],
    attempt:0,
    feedbackMessage:'Guess a number...',
    seen:false,
    feedbackColor: 'white'
});