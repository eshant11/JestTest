
import React from 'react'
import PropTypes from "prop-types";
function Input() {
    //We use React.useState() to mock the state instead of destructuring useState hook
    const [currentGuess, setCurrentGuess] = React.useState("")
    return (
        <div data-test="input-component">
            <form action="" className="form-inline">
                <input type="text"
                    data-test="input-box"
                    placeholder="enter guess"
                    value={currentGuess}
                    onChange={(e) => setCurrentGuess(e.target.value)}
                    className="mb-2 mx-sm-3" />
                <button data-test="submit-btn" className="btn btn-primary mb-2">Submit</button>

            </form>
        </div>
    )
}
Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
}
export default Input