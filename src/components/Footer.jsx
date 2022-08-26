import React from 'react';
import styled from 'styled-components';

const FooterTag = styled.section`
     width: 100%;
     height: auto;
     background-color:black;
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
     span{
             color: #5361FF;
            font-size: large;
            font-style: normal;
            text-transform: uppercase;
     }
     h1{
        text-align:center;
     }
`;


const Footer = () => {
    return (
        <FooterTag>
            <div className='footer-line'>
                <div>
                    <p>Copyright &copy; 2022 Chantal Charles. All Rights Reserved</p>
                </div>
                <div>
                    <p>Developed by: <span>Sholag International</span></p>
                </div>
            </div>

            <div>
                <a href="#"><h1>Goto Top</h1></a>
            </div>
        </FooterTag>
    );
};

export default Footer;
