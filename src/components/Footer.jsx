import React from 'react';
import styled from 'styled-components';

const FooterTag = styled.section`
     width: 100%;
     height: auto;
     background-color:#042759;
     font-style: italic;
     font-family: 'Montserrat';
     font-size: small;
     margin-top: ${({theme}) => theme.margins.small};
     color:white;
     .footer-line{
        width:60%;
        padding: 0 20%;
        padding-top:${({theme}) => theme.margins.small};
        display:flex;
        justify-content: space-between;
     }
     
     h1{
        text-align:center;
     }
     
     .footer-menu{
        display: flex;
        justify-content:space-around;
        li{
            list-style:none;
        }
        
        a{
            color:white;
            text-decoration:none;
        }
     }
`;


const Footer = () => {
    return (
        <FooterTag>
            <div className="footer-menu">
                <div className="footer__data">
                    <h2 className="footer__title">EXPLORE</h2>
                    <ul>
                        <li><a href="#home" className="footer__link">Home</a></li>
                        <li><a href="#about" className="footer__link">About</a></li>
                        <li><a href="#skills" className="footer__link">Skills</a></li>
                        <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
                        <li><a href="#Contact" className="footer__link">Contact</a></li>
                    </ul>
                </div>
                <div className="footer__data">
                    <h2 className="footer__title">FOLLOW</h2>
                    <a href="#" className="footer__social"><i className='bx bxl-facebook'></i></a>
                    <a href="#" className="footer__social"><i className='bx bxl-instagram'></i></a>
                    <a href="#" className="footer__social"><i className='bx bxl-twitter'></i></a>
                </div>
            </div>
            <div className='footer-line'>
                <div>
                    <p>Copyright &copy; 2022 Chantal Charles. All Rights Reserved</p>
                </div>
                <div>
                    <p>Developed by: <span>Sholag International</span></p>
                </div>
            </div>
            <div>
                <a href="/#"><h1>Goto Top</h1></a>
            </div>
        </FooterTag>
    );
};

export default Footer;
