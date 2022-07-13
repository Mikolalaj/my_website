import Shiba from "./Shiba";
import { useState } from "react";

function HomeShiba() {
    const [shibaPetsCounter, setShibaPetsCounter] = useState(0);

    return (
    <>
        {shibaPetsCounter < 5 ? 
            <Shiba type='Happy' onClick={() => setShibaPetsCounter(shibaPetsCounter + 1)}/>
            : <Shiba type='Stubborn' />}
        <h3>
            {shibaPetsCounter < 5 ?
                <>Also, I love <span className='shiba'>Shiba Inu</span></>
                : "I'm not going on a walk with you!"}
        </h3>
    </>
    );
}

export default HomeShiba;
