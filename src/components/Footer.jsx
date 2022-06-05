import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return ( <footer className='footer-container'>
    <div className='social-links'>
      <FaFacebookF className='facebook' size={30} color='hsl(223, 87%, 63%)'  />
      <FaTwitter className='twitter' size={30} color='hsl(223, 87%, 63%)' />
      <FaInstagram  className='instagram' size={30} color='hsl(223, 87%, 63%)' />
    </div>
    <p className='copyright'>&copy; Copyright Ping. All rights reserved.</p>
  </footer> );
}
 
export default Footer;