import { ReactComponent as ShibaHappy } from '../images/shiba-happy.svg';
import { ReactComponent as ShibaStubborn } from '../images/shiba-stubborn.svg';
import { ReactComponent as ShibaAngry } from '../images/shiba-angry.svg';
import './Shiba.scss';

interface ShibaProps {
    type: 'Happy' | 'Stubborn' | 'Angry';
    onClick?: () => void;
    isActive?: boolean;
}

function Shiba({ type, onClick, isActive }: ShibaProps) {

    const props = {
        className: isActive ? 'active': '',
        onClick
    }

    return (
    <div className='shiba-wrapper'>
        {type === 'Happy' ? 
            <ShibaHappy {...props} />
        : type === 'Stubborn' ? 
            <ShibaStubborn {...props} />
        : <ShibaAngry {...props} />
        }
    </div>
    );
}

export default Shiba;
