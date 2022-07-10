import { Routes, Route } from "react-router-dom";
import { ReactComponent as ShibaHappy } from './images/shiba-happy.svg';
import { ReactComponent as ShibaAngry } from './images/shiba-angry.svg';
import { ReactComponent as ShibaStubborn } from './images/shiba-stubborn.svg';
import { useState } from "react";
import Icons from './Icons';
import './App.scss';

function App() {
    const [shibaPetsCounter, setShibaPetsCounter] = useState(0);


    return (
    <div className="App">
    <Routes>
        <Route path='/' element={
            <>
            <h1>Hi, I'm Mikołaj!</h1>
            <div>
                <h2>Full-stack developer</h2>
                <div className='underline'></div>
            </div>
            <Icons />
            <div className='shiba-wrapper'>
                {shibaPetsCounter < 5 ? 
                    <ShibaHappy onClick={() => setShibaPetsCounter(shibaPetsCounter + 1)}/>
                    : <ShibaStubborn />}
            </div>
            {shibaPetsCounter < 5 ?
                <h3>Also, I love <span className='shiba'>Shiba Inu</span></h3>
                : <h3>I'm not going on a walk with you!</h3>}
            </>
        } />
        <Route path='*' element={
            <>
            <h2>You are not supposed to be here!</h2>
            <div className='shiba-wrapper'>
                <ShibaAngry onClick={() => {window.open('https://en.wikipedia.org/wiki/Shiba_Inu')}}/>
            </div>
            <h3>Now I am an angry <span className='shiba'>Shiba 404</span></h3>
            </>
        } />
    </Routes>
    </div>
    );
}

export default App;
