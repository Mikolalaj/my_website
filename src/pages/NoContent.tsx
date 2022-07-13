import { ReactComponent as ShibaAngry } from '../images/shiba-angry.svg';

function NoContent() {
    return (
    <>
        <h2>You are not supposed to be here!</h2>
        <div className='shiba-wrapper'>
            <ShibaAngry onClick={() => {window.open('https://en.wikipedia.org/wiki/Shiba_Inu')}}/>
        </div>
        <h3>Now I am an angry <span className='shiba'>Shiba 404</span></h3>
    </>
    );
}

export default NoContent;