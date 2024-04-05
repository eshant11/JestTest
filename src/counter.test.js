

import Counter from './Counter';
import { configure, shallow,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from './Table';


configure({ adapter: new Adapter() });

describe('Counter', () => {
    it('click-counter', () => {
        let wrapper = shallow(<Counter />);
        expect(wrapper.find('.clicks-0').length).toEqual(1);
        
        // to check click counter after every click class should be 1s
      let button= wrapper.find('button');
      button.simulate('click');
let btnLength=wrapper.find('.clicks-1').length
        expect(btnLength).toEqual(1);
    })
    it('click 3-counter', () => {
        let wrapper = shallow(<Counter />);
        expect(wrapper.find('.clicks-0').length).toEqual(1);
        // to check click counter after every click class should be 1s
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(wrapper.find('.clicks-3').length).toEqual(1);
    })

    // kisi bhi component ke andar ke item ko check krna ho toh

    it('dive', () => {
        let wrapper = shallow(<Counter />);
        expect(wrapper.find(Table).dive().find('.custom-border').length).toBe(1);   

    })
    
    // Mount
    // it('dive', () => {
    //     let wrapper = mount(<Counter />);
    //     expect(wrapper.find('.custom-border').length).toBe(1);   

    // })
})