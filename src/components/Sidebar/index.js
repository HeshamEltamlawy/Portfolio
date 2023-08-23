import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-social.jpg';
// import LogoSubtitle from '../../assets/images/logo-social1.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser,faEnvelope, faCode} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faYoutube,faLinkedinIn,faGithub, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faGithub, faFontAwesome)

const Sidebar = () => (
        <div className='nav-bar'>
            
            <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
            {/* <img className='sub-logo' src={LogoSubtitle} alt='hesham'/> */}
            </Link>
            
            <nav className='nav'>
                
            <ul>
                <li>
                    <a className="linkedin-link"
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/hesham-mohamed-436000206/'>
                    <FontAwesomeIcon  icon={faLinkedinIn} color='#4d4d4e'/>

                    </a>
                </li>
                <li>
                    <a className="linkedin-link"
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/HeshamEltamlawy/'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>

                    </a>
                </li>
                <li>
                    <a className="github-link"
                    target='_self'
                    rel='noreferrer'
                    href='/'>
                        <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
                <NavLink exact="true" activeclassname="active" className="home-link" to="/Portfolio">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="app-link" to="/apps">
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
                </NavLink>
                

                

            </nav>
            
        </div>
    
)

    export default Sidebar;