import React, {useState} from 'react';
import {DataCarousel} from './CarouselData';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaFacebook, FaInstagram} from 'react-icons/fa';
import styled from 'styled-components'

const Navbar = styled.div`
    position: absolute;
    z-index: 2;
    background: none;
    border: none;
    background-color: rgba(0, 0, 0, .1);
    width: 100%;
    
    ul {
    display:flex;
    margin: 0;
    padding: 20px;
    list-style: none;
    justify-content:right;
    li {
        a{
          font-size:40px;
          padding: 0 5px;
          }
        }
    
    }
`;


const CarouselText = styled.div`
    z-index: 199;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 60px;
    color: white;
    text-align: center;
    h1{
            font-size: 6vw;
            letter-spacing: normal;
            text-transform: uppercase;
            font-family: 'Fjalla One', sans-serif;
            text-shadow: 0.1em 0.1em 0.2em black;
            cursor: pointer;
            &:hover{
                     text-decoration: underline;
                     color:${({theme}) => theme.colors.dark};
                     text-shadow: 0.1em 0.1em 0.2em black;
            }
    }
    
    .carousel-link{
     
     a{
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        padding-right: 5px;
        padding-left: 5px;
        text-shadow: 0.1em 0.1em 0.2em black; 
        text-decoration:none;        
        &:hover{
             text-decoration: underline;
             color:${({theme}) => theme.colors.dark};
             text-shadow: 0.1em 0.1em 0.2em black;
             cursor: pointer;      
        }
      }
     
    }
`;

const ImageCarousel = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <Navbar>
                <ul>
                    <li>
                        <a href="">
                            <FaInstagram/>
                        </a>
                    </li>
                    <li>
                        <a href="" className="link">
                            <FaFacebook/>
                        </a>
                    </li>
                </ul>
            </Navbar>
            <CarouselText>
                <h1>Chantal Charles </h1>
                <div className="carousel-link">
                    <a href="#portfolio">Portfolio</a>
                    <a href="#mywork">My Work</a>
                    <a href="https://www.instagram.com/chail.een/?hl=en">Instagram</a>
                    <a href="#contact">Contact</a>
                </div>
            </CarouselText>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {DataCarousel.map((slide, index) => {
                let image = String("./images/dsc9.JPG");
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.url} alt='travel image' className='image'/>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageCarousel
