import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return ( <footer className='footer-container'>
    <div className='social-links'>
      <FaFacebookF className='facebook' size={30} color='hsl(223, 87%, 63%)'  />
      <FaTwitter className='twitter' size={30} color='hsl(223, 87%, 63%)' />
      <FaInstagram  className='instagram' size={30} color='hsl(223, 87%, 63%)' />
    </div>
    <p className='copyright'>&copy; Copyright Ping. All rights reserved.</p>
    <p class="attribution">
      Challenge by <a  rel="noopener" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a rel="noopener"  href="https://www.frontendmentor.io/profile/marcoberdiano">Marco</a>.
    </p>
  </footer> );
}
 
export default Footer;