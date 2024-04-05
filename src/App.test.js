
import { shallow } from 'enzyme';

import App from './App';
import { findByTestAttribute } from './test/testUtils';

// configure({ adapter: new Adapter() });
/**
 * Factory func. to create a ShallowWrapper for the App component
 * @function  setup
 * @returns {ShallowWrapper}
 *   
 */
const setup = shallow(<App />)

// const findByTestAttribute = (wrapper:any, val:any) => {
//     return (wrapper.find(`[data-test='${val}']`))
// }

test('renders without error', () => {
    const wrapper = setup()
    const appComponent = findByTestAttribute(wrapper, 'component-App')
    expect(appComponent.length).toBe(1)
});
test('renders buttons', () => {
    const wrapper = setup()
    const button = findByTestAttribute(wrapper, 'increment-button')
    expect(button.length).toBe(1)
});
test('renders counter display', () => {
    const wrapper = setup()
    const counterDisplay = findByTestAttribute(wrapper, 'counter-display')
    expect(counterDisplay.length).toBe(1)
});
//count should  be zero
test('counter starts with 0', () => {
    const wrapper = setup()
    const count = findByTestAttribute(wrapper, 'count').text()
    expect(count).toBe("0")
});
test('clicking on button increments counter display', () => {
    const wrapper = setup();

    //find the button
    const button = findByTestAttribute(wrapper, 'increment-button')

    //click the button
    button.simulate('click')

    //find the display, and test that the number has been incremented
    const count = findByTestAttribute(wrapper, 'count').text()
    expect(count).toBe("1")

});
test("renders decrement button ", () => {
    const wrapper = setup()
    const decrementBtn = findByTestAttribute(wrapper, "decrement-button")
    expect(decrementBtn.length).toBe(1)
})

//check the value of ciount when imcrement and decrement clicked one after other
test("clicking decrement button decrements counter display when state is greater than 0", () => {
    const wrapper = setup()

    // click the increment button so that the counter is greater than 0
    const incButton = findByTestAttribute(wrapper, "increment-button")
    incButton.simulate('click')

    // find decrement button and click
    const decButton = findByTestAttribute(wrapper, "decrement-button")
    decButton.simulate('click')

    // find display and test value
    const count = findByTestAttribute(wrapper, 'count').text()
    expect(count).toBe('0')

})

//error when counter goes below 0
describe("error when counter goes below 0", () => {
    test("error does not show when not needed", () => {
        const wrapper = setup()
        const error = findByTestAttribute(wrapper, 'err-msg')

        // using enzyme's ".hasClass()" method
        // http://airbnb.io/enzyme/docs/api/ShallowWrapper/hasClass.html
        const errorClass = error.hasClass('hidden')
        expect(errorClass).toBe(true)

    })

    describe("counter is 0 and decrement is clicked", () => {
        // using a describe here so I can use a "beforeEach" for shared setup in every test cases
        // scoping wrapper to the describe, so it can be used in beforeEach and the tests
        let wrapper: any;

        beforeEach(() => {
            // here we write that fucntions which is used in all rest of the test cases initially
            // no need to set counter value here; default value of 0 is good
            wrapper = setup();

            // find button and click
            const button = findByTestAttribute(wrapper, "decrement-button");
            button.simulate("click");
        })

        //to check the error msg is shown
        test('error shows', () => {
            // check the class of the error message shown
            const errorMsg = findByTestAttribute(wrapper, 'err-msg');
            const errorHasHiddenClass = errorMsg.hasClass('hidden');
            expect(errorHasHiddenClass).toBe(false)
        })

        // To check value of cont is 0 or not
        test("counter still displays 0", () => {
            const count = findByTestAttribute(wrapper, "count").text();
            expect(count).toBe("0");
        });

        // to clear the error msg clicking the increment button
        test("clicking increment clears the error", () => {
            // find and click the increment button
            const incButton = findByTestAttribute(wrapper, "increment-button");
            incButton.simulate("click");

            // check the class of the error message shouldn't be shown
            const errorDiv = findByTestAttribute(wrapper, "err-msg");
            const errorHasHiddenClass = errorDiv.hasClass("hidden");
            expect(errorHasHiddenClass).toBe(true);
        });
    })
}
)



// //for finding decrement button
// test("render decrement button", () => {
//     const wrapper = setup()

//     //find the decrement button
//     const clickButton = findByTestAttribute(wrapper, "decrement-button")
//     expect(clickButton.length).toBe(1);
//     //click the button
//     clickButton.simulate("click")

//     // find the display and test that the number has been decremented
//     const decrementCount = findByTestAttribute(wrapper, 'count').text()
//     //decrement count
//     expect(decrementCount).toBe("0")


// })
// test('error message displayed when count is less than or equal to 0', () => {
//     const wrapper = setup();

//     // Initially, the error message should not be displayed
//     let errMsg = findByTestAttribute(wrapper, 'err-msg');
//     expect(errMsg.length).toBe(0);

//     // Find the decrement button and click it to set the count to 0
//     const decrementButton = findByTestAttribute(wrapper, 'decrement-button');
//     decrementButton.simulate('click');

//     // Find the error message and verify that it's displayed
//     errMsg = findByTestAttribute(wrapper, 'err-msg');
//     expect(errMsg.length).toBe(1);
// });
// test('error message not displayed when count is incremented from 0', () => {
//     const wrapper = setup();

//     // Initially, the count should be 0
//     let countDisplay = findByTestAttribute(wrapper, 'count').text();
//     expect(countDisplay).toBe('0');

//     // Initially, the error message should not be displayed
//     let errMsg = findByTestAttribute(wrapper, 'err-msg');
//     expect(errMsg.length).toBe(0);

//     // Find the increment button and click it
//     const incrementButton = findByTestAttribute(wrapper, 'increment-button');
//     incrementButton.simulate('click');

//     // Find the count display and verify that it has been incremented
//     countDisplay = findByTestAttribute(wrapper, 'count').text();
//     expect(countDisplay).toBe('1');

//     // Error message should not be displayed after incrementing from 0
//     errMsg = findByTestAttribute(wrapper, 'err-msg');
//     expect(errMsg.length).toBe(0);
// });
