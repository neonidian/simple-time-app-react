import React from 'react';
import './Header.css';

const Header = () =>
    <header id={'header'}>
        <h1>Time</h1>
        <InformationAboutPage />
    </header>;


const InformationAboutPage = () =>
    <blockquote cite={'https://www.allgreatquotes.com/quote-345784/'}>
        Time is the wisest counselor of all
    </blockquote>

export default Header;
