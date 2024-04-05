import React from 'react';
import PropTypes from 'prop-types';
/**
 * Funtional react component for congratulatory message
 * @function 
 * @param  {object} props - React props
 * @returns {ShallowWrapper} - Rendered component (or null if 'success)
 *   
 */
const Congrats = (props) => {
    return (
        props.success ? (<div data-test='component-congrats'>
            <span data-test='congrats-message'>
                Congratulations you guess the word!!
            </span>
        </div>) : (<div data-test='component-congrats'></div>)
    )

};
Congrats.propTypes = {
    //propTypes is Required
    success: PropTypes.bool.isRequired
}


export default Congrats;