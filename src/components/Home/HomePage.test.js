import React from 'react';
import {render} from '@testing-library/react';
import HomePage from './HomePage';

test('renders home page with "Loading..." text when the page is first mounted', () => {
    const {getByTestId} = render(<HomePage />);
    const headerElement = getByTestId('time-ip-address');
    expect(headerElement).toHaveTextContent('Loading...')
});
