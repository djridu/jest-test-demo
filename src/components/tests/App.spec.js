import React from 'react';
import { render, cleanup } from 'react-testing-library';

import App from '../App';
import Header from '../../containers/Header';
import MainSection from '../../containers/MainSection';

const setup = propOverrides => {
    const { container } = render(<App />);
    return container;
};

describe('components', () => {
    describe('Header', () => {
        it('should render', () => {
            const output = setup();
            console.log(output);
            // const [ header ] = output.props.children
            // expect(header.type).toBe(Header)
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
