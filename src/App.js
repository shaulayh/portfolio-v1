import './App.css';
import React from "react";
import ImageCarousel from "./components/ImageCarousel";
import {DataCarousel} from "./components/CarouselData";
import About from "./components/About";
import Measurement from "./components/Measurement";
import Portfolio from "./components/Portfolio";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const theme = {
    colors: {
        first: '#5361FF',
        white: '#FAFAFF',
        dark: '#2a3b47',
        text: '#697477',
        red: 'darkred'
    },

    margins: {
        small: '2rem',
        medium: '5rem',
        large: '10'
    }
};


class App extends React.Component {
    render() {

        return (
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles/>
                    <ImageCarousel slides={DataCarousel}/>
                    <About/>
                    <Measurement/>
                    <Portfolio/>
                    <Contact/>
                    <Footer/>
                </>
            </ThemeProvider>
        )
    }
}


export default App;
