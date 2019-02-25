import React from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import { render } from 'react-testing-library';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {};
const store = mockStore(initialState);

const customRender = (node, options) => {
    return render(
        <Provider store={store} context={ReactReduxContext}>
            {/*<ThemeProvider theme="light">*/}
            {/*<TranslationProvider messages={defaultStrings}>*/}
            {node}
            {/*</TranslationProvider>*/}
            {/*</ThemeProvider>*/}
        </Provider>,

        options,
    );
};

// re-export everything
export * from 'react-testing-library';

// override render method
export { customRender as render };
