import { defineFeature, loadFeature } from 'jest-cucumber'
import { shallow } from 'enzyme'
import Form from './Form'


const feature = loadFeature("../../__test__/scenario.feature")
const setup = () => shallow(<Form />)

defineFeature(feature, (test) => {
    console.log(feature);
    let wrapper;
    beforeEach(() => {
        wrapper = setup()

    })
})