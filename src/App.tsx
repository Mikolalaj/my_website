import { ReactComponent as ReactLogo } from './shiba.svg';
import Icons from './Icons';
import './App.scss';

function App() {
    return (
    <div className="App">
        <h1>Hi! I'm Mikołaj!</h1>
        <div>
            <h2>Full-stack developer</h2>
            <div className='underline'></div>
        </div>
        <Icons />
        <div className='shiba-wrapper'>
            <ReactLogo onClick={() => {window.open('https://en.wikipedia.org/wiki/Shiba_Inu')}}/>
        </div>
        <h3>Also, I love <span className='shiba'>Shiba Inu</span></h3>
    </div>
    );
}

export default App;
