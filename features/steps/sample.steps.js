import { defineFeature, loadFeature } from 'jest-cucumber'
import { shallow } from 'enzyme'
import Form from './Form'


const feature = loadFeature(
    "../../src/feature/Form-scenario.web.feature"
)

const setup = () => shallow(<Form />)

defineFeature(feature, (test) => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup()
    })
})