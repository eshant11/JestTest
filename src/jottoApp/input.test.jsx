import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttribute } from "../test/testUtils";
import Input from "./Input";
/**
 * Factory func. to create a ShallowWrapper for the App component
 * @function  setup
 *
 */
const setup = (secretWord = 'party') => {
    return shallow(<Input />)
}

test('Input render without error', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttribute(wrapper, 'input-component');
    expect(inputComponent.length).toBe(1)
})
//  If u will passed a array it will show error
test('does not throw warning with expected props', () => {
    // checkProps(Input, { secretWord: [] })
    checkProps(Input, { secretWord: "" })
})
describe('state conrolled input field', () => {
    test('state updates with value of input box upon change', () => {
        const mocksetCurrentGuess = jest.fn();
        React.useState = jest.fn(() => ["", mocksetCurrentGuess])
        const wrapper = setup()
    })
})