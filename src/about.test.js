
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from './About';

configure({ adapter: new Adapter() });

describe("About page testing", () => {
    it("class-check", () => {
        let wrapper = shallow(<About />)
        // console.log(wrapper.debug());
        expect(wrapper.exists('.about')).toEqual(true)
    })
    // to check the state of a component
    it("state-check", () => {
        let wrapper = shallow(<About />)
        // console.log(wrapper.debug());
        expect(wrapper.state()).toEqual({
            name: "Eshant",
            id: 1,

        })
    })

    //To check the particular html msg if text is other than hello and same classname beacus here whole elem should be same
    it("html-msg-check", () => {
        let wrapper = shallow(<About />)
        // console.log(wrapper.debug());
        expect(wrapper.contains(<div className='about'>Hello</div>)).toEqual(true)
    })

    //To check the text between the tag (msg)if text is other than hello  element should in array[<></>]
    // yahan class mt dalo  vo check nhi karega
    it("only-msg-check", () => {
        let wrapper = shallow(<About />)
        // console.log(wrapper.debug());
        expect(wrapper.containsAllMatchingElements([<div>Hello</div>])).toEqual(true)
    })

    //To check the any of the html elements should in array[<></>,<></>]
    // koi ek element match hona  
    it("only-msg-check", () => {
        let wrapper = shallow(<About />)
        // console.log(wrapper.debug());
        expect(wrapper.containsAnyMatchingElements([<div>Hello</div>,<div>Hiii</div>])).toEqual(true)
    })
})
