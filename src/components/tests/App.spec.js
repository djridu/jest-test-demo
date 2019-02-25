import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../App';
import Header from '../../containers/Header';
import MainSection from '../../containers/MainSection';

const setup = () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    return renderer.getRenderOutput();
};

describe('components', () => {
    describe('<App />', () => {
        it('should render and match the snapshot', () => {
            const output = setup();
            expect(output).toMatchSnapshot();
        });
    });

    describe('<Header />', () => {
        it('should render', () => {
            const output = setup();
            const [header] = output.props.children;
            expect(header.type).toBe(Header);
        });
    });

    describe('<Mainsection />', () => {
        it('should render', () => {
            const output = setup();
            const [, mainSection] = output.props.children;
            expect(mainSection.type).toBe(MainSection);
        });
    });
});
