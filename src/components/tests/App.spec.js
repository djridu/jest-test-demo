import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { createRenderer } from 'react-test-renderer/shallow';
import App from '../App';
import Header from '../../containers/Header';
import MainSection from '../../containers/MainSection';

const setup2 = propOverrides => {
    const { container } = render(<App />);
    console.log(container)
    return container;
};

const setup = propOverrides => {
    const renderer = createRenderer();
    renderer.render(<App />);
    const output = renderer.getRenderOutput();
    return output;
};

describe('components', () => {
    describe('Header', () => {
        it('should render', () => {
            const output = setup();
            const output2 = setup2();
            const [header] = output.props.children;
            expect(header.type).toBe(Header);
        });
    });

    describe('Mainsection', () => {
        it('should render', () => {
            const output = setup();
            const [, mainSection] = output.props.children;
            expect(mainSection.type).toBe(MainSection);
        });
    });
});
