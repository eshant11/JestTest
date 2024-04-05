import { shallow } from 'enzyme'

import Congrats from './Congrats';
import { findByTestAttribute, checkProps } from '../test/testUtils';



const defaultProps = { success: false }
/**
 * Factory func. to create a ShallowWrapper for the App component
 * @function  setup
 * @param  {object} props - component props specific to this setup
 * @returns {ShallowWrapper}
 *   
 */

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Congrats {...setupProps} />)
}


test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttribute(wrapper, 'component-congrats');
    expect(component.length).toBe(1)
})
test('renders no text when `success` props is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttribute(wrapper, 'component-congrats')
    expect(component.text()).toBe("")
})
test('renders non-empty congrats message when success prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttribute(wrapper, 'congrats-message')
    expect(message.text().length).not.toBe(1)
})
test('does not throw error warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);

})
