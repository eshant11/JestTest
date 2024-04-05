import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './ToDo/Form';
import GuessedWord from './jottoApp/GuessedWord';
import Counter from './Counter';





ReactDOM.render(
  <>
    {/* <App /> */}
    {/* <Form /> */}
    <Counter />
    <GuessedWord guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]} />
  </>
  ,
  document.getElementById('root')
);
