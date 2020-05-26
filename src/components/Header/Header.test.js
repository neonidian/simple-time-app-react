import React from 'react';
import {render} from '@testing-library/react';
import Header from './Header';

test('renders header with <h1> tag with "time" text', () => {
    const {getByText} = render(<Header/>);
    const headerElement = getByText('Time');
    expect(headerElement).toBeInTheDocument();
});

test('renders header with <q> tag with a quote about time', () => {
    const {getByText} = render(<Header/>);
    const quoteAboutTime = getByText('Time is the wisest counselor of all');
    console.log(quoteAboutTime);
    expect(quoteAboutTime).toBeInTheDocument();
});