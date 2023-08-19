import './index.scss';
import '../../App.SCSS';

import AnimatedLetters from '../AnimatedLetters/index.js'
import { useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSass, faHtml5, faCss3, faJsSquare, faGitAlt, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    // const Audit =() =>{

    //     const [loading, setLoader] = useState(false)
    //     useEffect(() => {
    //         setLoader(true);
    //         setTimeout(() => {
    //             setLoader(false)

    //         },3000)
    //     },[])
    //     return(
    //         <div className='aud'>{
    //             loading?
    //             <Audio
    //                 height="80"
    //                 width="80"
    //                 radius="9"
    //                 color="green"
    //                 ariaLabel="loading"
    //                 wrapperStyle
    //                 wrapperClass
    //             />:<div></div>}</div>
    //     )
    // }



    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        return () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
        }
    }, [])
    return (
        <>            

            <div className="container about-page" >
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Experienced for 2 years in software Development, as a frontend I have experience using react js
                        , I used to practice some personal projects as a self learner, it reflects my experience level,
                        shared in my github website so it will be nice to take a look.
                    </p>
                    <p>
                        Highly collaborative; High level of organizational and communication skills High level of self-motivation and self-initiative.

                    </p>
                    <p>
                        I have both the technical skills and personal passion, teamwork and leadership skills.
                        When solving problems, I apply both logic and emotional aspects in equal proportion.
                    </p>
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

export default About;