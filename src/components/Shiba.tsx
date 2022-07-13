import { ReactComponent as ShibaHappy } from '../images/shiba-happy.svg';
import { ReactComponent as ShibaStubborn } from '../images/shiba-stubborn.svg';
import { ReactComponent as ShibaAngry } from '../images/shiba-angry.svg';
import './Shiba.scss';

interface ShibaProps {
    type: 'Happy' | 'Stubborn' | 'Angry';
    onClick?: any;
}

function Shiba({ type, onClick }: ShibaProps) {

    return (
    <div className='shiba-wrapper'>
        {type === 'Happy' ? 
            <ShibaHappy onClick={onClick} />
        : type === 'Stubborn' ? 
            <ShibaStubborn onClick={onClick} />
        : <ShibaAngry onClick={onClick} />
        }
    </div>
    );
}

export default Shiba;
