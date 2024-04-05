
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';

configure({ adapter: new Adapter() });

describe('describe shallow page',()=>{
    let wrapper = shallow(<Home/>)
    // to check that this className is exist or not
    expect(wrapper.exists('.className')).toEqual(true);
})