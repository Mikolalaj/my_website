import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

import './Icons.scss';

export default function Icons () {
    const links = {
        github: 'https://github.com/Mikolalaj',
        linkedin: 'https://www.linkedin.com/in/mikolalaj/',
        twitter: 'https://twitter.com/Mikolalaj_',
        email: 'mailto:olejnikmikolaj@gmail.com'
    }
    return (
    <div className='icons'>
        <FaGithub onClick={() => {window.open(links.github)}} />
        <FaLinkedin onClick={() => {window.open(links.linkedin)}} />
        <FaEnvelope onClick={() => {window.location.href = links.email}} />
        <FaTwitter onClick={() => {window.open(links.twitter)}} />
    </div>
    );
}
