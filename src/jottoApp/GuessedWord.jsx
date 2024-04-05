import React from "react";
import PropTypes from "prop-types";

const GuessedWord = (props) => {
    let content;
    if (props.guessedWords.length === 0) {
        content = (<span data-test="guess-instructions">
            Try to guess the secret word
        </span>)
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => (<tr data-test="guessed-word" key={index}>
            <td>{word.guessedWord}</td>
            <td>{word.letterMatchCount}</td>
        </tr>)



        )
        content = (<div data-test="guessed-words">
            <h2>Guesed Words</h2>
            <table>
                <thead>
                    <tr>
                        <th style={{ fontWeight: 800, marginRight: "5px" }}>Guess</th>
                        <th style={{ fontWeight: 800 }}>Matching Letters</th>
                    </tr>
                </thead>
                <tbody>
                    {guessedWordsRows}
                </tbody>
            </table>
        </div>)
    }
    return <div data-test="component-guessed-words">
        {content}
    </div>;
};
// defining that we are expecting a array which should be of this give below shape
GuessedWord.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWords: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default GuessedWord;