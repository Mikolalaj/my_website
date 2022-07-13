import { ReactComponent as ShibaHappy } from '../images/shiba-happy.svg';
import { ReactComponent as ShibaStubborn } from '../images/shiba-stubborn.svg';
import { useState } from "react";
import './Shiba.scss';

function Shiba() {
    const [shibaPetsCounter, setShibaPetsCounter] = useState(0);

    return (
    <>
        <div className='shiba-wrapper'>
            {shibaPetsCounter < 5 ? 
                <ShibaHappy onClick={() => setShibaPetsCounter(shibaPetsCounter + 1)}/>
                : <ShibaStubborn />}
        </div>
        <h3>
            {shibaPetsCounter < 5 ?
                <>Also, I love <span className='shiba'>Shiba Inu</span></>
                : "I'm not going on a walk with you!"}
        </h3>
    </>
    );
}

export default Shiba;
