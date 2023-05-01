import '../css/Header.css';
import GlobalNav from './GlobalNav';
import Logo from '../images/logo.jpg';

function Header({onNav}) {    
    return (
        <header className='header'>
            <img 
                src={Logo} 
                className = 'header_logo'
                alt="logo"            
            />

            <h1 className='header_title'>
                The Magic Cat -- Yuumi
            </h1>

            <GlobalNav onNav={onNav} className = "header_nav"/>        
        </header>
    );
}

export default Header;