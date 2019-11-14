import {render, wait} from '@testing-library/react';
import App from './index';
import {MockedProvider} from '@apollo/react-testing';
import React from 'react';

test('App renders without crashing', async () => {
    const {getByText} = render(
        <MockedProvider mocks={[]}>
            <App />
        </MockedProvider>
    );
    await wait(() =>
        expect(getByText('You are logged in.')).toBeInTheDocument()
    );
});
