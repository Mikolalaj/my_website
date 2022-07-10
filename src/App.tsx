import {ReactComponent as ReactLogo} from './shiba.svg';

import './App.scss';

function App() {
    return (
    <div className="App">
        <h1>Hi! I'm Mikołaj and I like Shibas</h1>
        <div className='shiba-wrapper'>
            <ReactLogo onClick={() => {window.open('https://en.wikipedia.org/wiki/Shiba_Inu')}}/>
        </div>
    </div>
    );
}

export default App;
