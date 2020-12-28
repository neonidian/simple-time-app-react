import './Header.css';

const clockSvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
    <path fill="none" d="M0 0h24v24H0z"/>
    <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"/>
</svg>;

const InformationAboutPage = () =>
    <blockquote cite={'https://www.allgreatquotes.com/quote-345784/'}>
        Time is the wisest counselor of all
    </blockquote>

const Header = () =>
    <header id={'header'}>
        <h1>Time</h1>
        {clockSvg}
        <InformationAboutPage/>
    </header>;

export default Header;
