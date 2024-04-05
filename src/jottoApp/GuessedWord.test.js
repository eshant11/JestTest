import { shallow } from "enzyme";
import GuessedWord from "./GuessedWord";
import { checkProps, findByTestAttribute } from "../test/testUtils";

const defaultProps = {
    // guessedWords: "sdfg",
    guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * Factory func. to create a ShallowWrapper for the App component
 * @function  setup
 * @param  {object} props - component props specific to this setup
 * @returns {ShallowWrapper}
 *
 */


const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWord {...setupProps} />);
};

test("does not throw warning with expected props", () => {
    checkProps(GuessedWord, defaultProps);
});
describe("If there are no words guessed", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    })
    test('renders without error', () => {

        const component = findByTestAttribute(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word', () => {

        const instructions = findByTestAttribute(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });


})
describe("If there are words guessed", () => {
    let wrapper;
    let guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 }
    ];
    beforeEach(() => {
        wrapper = setup({ guessedWords })
    });
    test('renders without errors', () => {
        const guessedWordNode = findByTestAttribute(wrapper, 'guessed-words');
        expect(guessedWordNode.length).toBe(1)
    });
    test('renders  guessed words section', () => {
        const guessedWordNode = findByTestAttribute(wrapper, 'guessed-words');
        expect(guessedWordNode.length).toBe(1)
    })
    test('correct number of guessed words ', () => {
        const guessedWordsNodes = findByTestAttribute(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(0)
    })
})
