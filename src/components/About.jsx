import React from 'react';
import styled from 'styled-components'

const AboutContainer = styled.section`
   
   p{
     margin : auto ;
     padding : 0% 20%;
     text-align:center;
     font-style: italic;
     font-family: cursive;
   }
`;


const About = () => {
    return (
        <AboutContainer>
            <h1 className="section-title">About</h1>
            <p>
                Hi! I’m Chantal and I love being in front of the camera!I’m an aspiring model who worked for numerous
                agency clients. I have presented clothing and products in commercials and I appeared as an extra in
                projects for various artists, including Jason Derulo, Kodak Black, Issae Rae and Walshy Fire.
                I’m known for my unique look, curly hair, work ethic, professionalism, and ability to take direction
            </p>
        </AboutContainer>
    );
};
export default About;
