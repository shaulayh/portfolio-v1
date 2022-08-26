import React from 'react';
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import styled from 'styled-components';

const ContactTag = styled.section`
            .contact{
                display:flex;
                justify-content:space-between;
            }
            .social-tab{
                font-size:5rem;
            }
    
`;


const Contact = () => {
    return (

        <ContactTag>
            <div className="portfolio-container">
                <h1 className="section-title">Contact</h1>
                <div className="contact">
                    <div className="contact__info">
                        <h3 className="contact__subtitle">EMAIL</h3>
                        <p className="contact__text">shaulayham@yahoo.com</p>

                        <h3 className="contact__subtitle">PHONE</h3>
                        <span className="contact__text">+48729344581</span>

                        <h3 className="contact__subtitle">ADDRESS</h3>
                        <span className="contact__text">Ul.Sikorskiego 42/70 , katowice. 40-276.Poland</span>
                    </div>
                    <div className="social-tab">
                        <a href="#">
                            <FaInstagram/>
                        </a>

                        <a href="#">
                            <FaFacebook/>
                        </a>
                    </div>
                </div>
            </div>
        </ContactTag>
    );
};

export default Contact;
