import moment from 'moment';
import logo from '../../../assets/images/logo.png';

const Header = () => {
    return (
        <div className='text-center '>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism without Fear and Favour</p>
            <p className='text-3xl'>{moment().format('dddd, MMMM D, YYYY') }</p>
            
        </div>
    );
};

export default Header;