import './index.scss';
import AnimatedLetter from '../../components/AnimatedLetters/index';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
  } from 'react-leaflet';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    

        emailjs
        .sendForm(
            'service_ktft1al',
            'template_cxn21ih',
            refForm.current,
            'nVeJ-caxG0bZoPpya'
                
        )
        .then(
            () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again')
        }
        )
    };


    useEffect(() => {
        return () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
        }
    }, [])

    return <>        

        <div className="container contact-page" >
            <div className="text-zone">
                
                <h1>
                    <AnimatedLetter letterClass={letterClass}
                        strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
                        idx={15}> </AnimatedLetter>
                </h1>
                <p>
                    My experience in the development field and my skills in client-side technologies make me an ideal candidate for the freelance opportunities.
                
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail} >
                        <ul>
                            <li className='half'>
                                <input type='text'  placeholder='Name' name='name' required />

                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />

                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>

                </div>

           
            </div>
            <div className='info-map'>
                Hesham Ramadan
                <br />
                Egypt,
                <br />
                Alexandria, Marsa Matrouh Road, Al Agamy, Al Dikheila, 21928, Egypt                <br />
                <span>
                    hesham.developing@gmail.com
                </span>

            </div>
            <div className='map-wrap'>
                <MapContainer center={[31.09925856466258,29.77170596743886]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                     <Marker position={[31.09925856466258,29.77170596743886]}>
                        <Popup>Hesham lives here, come over for a cup of coffee </Popup>

                     </Marker>
                </MapContainer>
                 
            </div>

        </div>
    </>
}




export default Contact;