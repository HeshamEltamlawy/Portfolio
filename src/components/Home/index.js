import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-social.jpg';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSass, faHtml5, faCss3, faJsSquare, faGitAlt, faReact } from '@fortawesome/free-brands-svg-icons'
const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['H','e', 's', 'h', 'a', 'm']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() =>{
        return ()=>{setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
    }}, [])

    return (
    <>

    
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>

                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m &nbsp;</span>


                    {/* <img src={LogoTitle} alt="developer" /> */}
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={21} />

                </h1>
                <h2>Frontend Developer / GIS Solutions / Freelancer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
                <i class="fa fa-linkedin" aria-hidden="true" color='#4d4d4e'></i>
            </div>


        

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faSass} color="#DD0031" />


                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />


                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />


                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />


                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EDD81D" />


                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />


                        </div>


                    </div>

                </div>
            </div>
        </>

    )
}


export default Home;