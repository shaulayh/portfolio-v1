import React from 'react';
import myPhoto1 from './images/dsc3.JPG'
import myPhoto2 from './images/dsc1.JPG'
import myPhoto3 from './images/dsc2.JPG'
import myPhoto4 from './images/dsc10.jpg'
import styled from 'styled-components'

const PortfolioWrapper = styled.div`
    

    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-gap: 10px;    
    grid-auto-flow: dense;
        
        img{
            max-width: 100%;
            height: auto;
            display:inline-block;
            vertical-align:middle;
        }
        
        div{
            display:flex;
            justify-content:center;
            align-items: center;
            position:relative;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 1rem;
            }
        }

      .portfolio__link{
        position: absolute;
        bottom: -100%;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255,255,255,.3);
        border-radius: 0.5rem;
        cursor: pointer;
        backdrop-filter: blur(10px);
        transition: .3s;
      }
      
      .item:hover .portfolio__link{
        bottom: 0;
       }
      .portfolio__link-name{
            color: ${({theme}) => theme.colors.red};
            font-family:'Fjalla One', sans-serif;
            font-size:20px;
        }

`;


const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <h1 className='section-title'>Portfolio</h1>
            <PortfolioWrapper>
                {/*Todo: Fetch pictures from file*/}
                {/*Todo: use react map to repeat*/}
                {/*Todo: use light-box to display images in gallery*/}
                <div className="item">
                    <img src={myPhoto1} alt=""/>
                    <div className="portfolio__link">
                        <a href="/#" className='portfolio__link-name' data-lightbox="mygallery">View Images</a>
                    </div>
                </div>
                <div className="item">
                    <img src={myPhoto2} alt=""/>
                    <div className="portfolio__link">
                        <a href="/#" className='portfolio__link-name' data-lightbox="mygallery">View Images</a>
                    </div>
                </div>
                <div className="item">
                    <img src={myPhoto3} alt=""/>
                    <div className="portfolio__link">
                        <a href="/#" className='portfolio__link-name' data-lightbox="mygallery">View Images</a>
                    </div>
                </div>
                <div className="item">
                    <img src={myPhoto4} alt=""/>
                    <div className="portfolio__link">
                        <a href="/#" className='portfolio__link-name' data-lightbox="mygallery">View Images</a>
                    </div>
                </div>
                <div className="item">
                    <img src={myPhoto1} alt=""/>
                    <div className="portfolio__link">
                        <a href="/#" className='portfolio__link-name' data-lightbox="mygallery">View Images</a>
                    </div>
                </div>
                <div className="item">
                    <img src={myPhoto2} alt=""/>
                    <div className="portfolio__link">
                        <a href="/#" className='portfolio__link-name' data-lightbox="mygallery">View Images</a>
                    </div>
                </div>
                <div className="item">
                    <img src={myPhoto3} alt=""/>
                    <div className="portfolio__link">
                        <a href="/#" className='portfolio__link-name' data-lightbox="mygallery">View Images</a>
                    </div>
                </div>
                <div className="item">
                    <img src={myPhoto4} alt=""/>
                    <div className="portfolio__link">
                        <a href="/#" className='portfolio__link-name' data-lightbox="mygallery">View Images</a>
                    </div>
                </div>
                <div className="item">
                    <img src={myPhoto1} alt=""/>
                    <div className="portfolio__link">
                        <a href="/#" className='portfolio__link-name' data-lightbox="mygallery">View Images</a>
                    </div>
                </div>
                <div className="item">
                    <img src={myPhoto2} alt=""/>
                    <div className="portfolio__link">
                        <a href="/#" className='portfolio__link-name' data-lightbox="mygallery">View Images</a>
                    </div>
                </div>
                <div className="item">
                    <img src={myPhoto3} alt=""/>
                    <div className="portfolio__link">
                        <a href="/#" className='portfolio__link-name' data-lightbox="mygallery">View Images</a>
                    </div>
                </div>
                <div className="item">
                    <img src={myPhoto4} alt=""/>
                    <div className="portfolio__link">
                        <a href="/#" className='portfolio__link-name' data-lightbox="mygallery">View Images</a>
                    </div>
                </div>
            </PortfolioWrapper>
        </div>
    );
};

export default Portfolio;
