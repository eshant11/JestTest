import checkPropTypes from 'check-prop-types';
/**
 * return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param  {String} val - Value of  data-test attribute for search
 * @returns {ShallowWrapper}
 *   
 */

export const findByTestAttribute = (wrapper, val) => {
    return (wrapper.find(`[data-test="${val}"]`))
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(component.propTypes, conformingProps, 'props', component.name)
    expect(propError).toBeUndefined();
}; 