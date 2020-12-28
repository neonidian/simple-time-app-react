import Header from './components/Header/Header';
import TimeBasedOnIpAddress from './components/TimeBasedOnIpAddress/TimeBasedOnIpAddress';
import TimeBasedOnLocation from "./components/TimeBasedOnLocation/TimeBasedOnLocation";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <TimeBasedOnIpAddress />
            <TimeBasedOnLocation />
            <Footer />
        </>
    );
}

export default App;
