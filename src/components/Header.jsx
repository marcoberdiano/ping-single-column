import {ReactComponent as Logo} from '../images/logo.svg';
const Header = () => {
    return ( 
        <header className='header-container'>
        <Logo className='logo'/>
        <h2 className='title'>We are launching <span className='soon'>soon!</span></h2>
        <p className='paragraph'>Subscribe and get notified</p>
      </header>
     );
}
 
export default Header;