import Shiba from "../components/Shiba";

function NoContent() {
    return (
    <>
        <h2>You are not supposed to be here!</h2>
        <Shiba type='Angry' onClick={() => {window.open('https://en.wikipedia.org/wiki/Shiba_Inu')}}/>
        <h3>Now I am an angry <span className='shiba'>Shiba 404</span></h3>
    </>
    );
}

export default NoContent;