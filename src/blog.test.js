
import Blog from './Blog';


import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Blog test check', () => {
    // Test to check the number of list items with class .liCss
    it('should render four list items with class .liCss', () => {
        let wrapper = shallow(<Blog />)
        expect(wrapper.find('.liCss').length).toBe(4)
    })
    // to check the class or any particular keys
    it('at & key chaeck', () => {
        let wrapper = shallow(<Blog />)
        expect(wrapper.find('.liCss').at(0).key()).toBe('Angular')
    });
    // to check the child
    it('child check', () => {
        let wrapper = shallow(<Blog />)
        expect(wrapper.find('.numbers').childAt(0).type()).toBe('span')
    });
    // to check the length of children (li) of ul 
    it('children length check', () => {
        let wrapper = shallow(<Blog />)
        expect(wrapper.find('ul').children().length).toBe(4)
    });
    // to check that class is exist or not in relative element 
    it('class is existed or not', () => {
        let wrapper = shallow(<Blog />)
        expect(wrapper.find('.my-button').hasClass('disabled')).toBe(true)
    });
    // to check is that class exist or not but it will check on top
    it('class is existed or not', () => {
        let wrapper = shallow(<Blog />)
        expect(wrapper.is('.mainClss')).toBe(true)
    });
});