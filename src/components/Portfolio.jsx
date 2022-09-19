import React, {useState} from 'react';

import myPhoto1 from './images/dsc3.JPG'
import myPhoto2 from './images/dsc1.JPG'
import myPhoto3 from './images/dsc2.JPG'
import myPhoto4 from './images/dsc10.jpg'
import myPhoto5 from './images/dsc00141.JPG'
import myPhoto6 from './images/dsc6.JPG'
import myPhoto7 from './images/dsc5.JPG'
import myPhoto8 from './images/dsc00027.JPG'
import myPhoto9 from './images/dsc00031.JPG'
import myPhoto10 from './images/dsc00034.JPG'
import styled from 'styled-components'
import FsLightbox from 'fslightbox-react';

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
    const [lightBoxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightBoxController.toggler,
            slide: number
        });
    }

    const dataDisplay = [
        myPhoto1,
        myPhoto2,
        myPhoto3,
        myPhoto4,
        myPhoto10,
        myPhoto5,
        myPhoto6,
        myPhoto7,
        myPhoto8,
        myPhoto9,
        myPhoto10,
        'https://i.imgur.com/fsyrScY.jpg',
        'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        myPhoto4,
        myPhoto5,
        myPhoto6,
        myPhoto7,
        myPhoto8,
    ];

    console.log(dataDisplay[0]);
    return (
        <div className="portfolio-container" id="portfolio">
            <h1 className='section-title'>Portfolio</h1>
            <PortfolioWrapper>
                {/*Todo: Fetch pictures from file*/}
                {/*Todo: use react map to repeat*/}
                {/*Todo: use light-box to display images in gallery*/}
                {dataDisplay.map((data, index) => {
                    return (
                        <div className="item">
                            <img src={data} alt=""/>
                            <div className="portfolio__link">
                                <a href="/#" onClick={() => openLightboxOnSlide(index + 1)}
                                   className='portfolio__link-name'
                                   data-lightbox="mygallery">View Content</a>
                            </div>
                        </div>
                    )
                })}
            </PortfolioWrapper>
            <>
                <FsLightbox
                    toggler={lightBoxController.toggler}
                    sources={dataDisplay}
                    slide={lightBoxController.slide}
                    types={['image', 'image', null, null, null]}
                />
            </>
        </div>
    );
};

export default Portfolio;
