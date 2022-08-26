import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
        /*===== GOOGLE FONTS =====*/
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap");
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        
        /*===== VARIABLES CSS =====*/
        :root{
          --header-height: 3rem;
          --font-medium: 500;
        }
        
        /*===== Colores =====*/
        :root{
          --first-color: #5361FF;
          --white-color: #FAFAFF;
          --dark-color: #2A3B47;
          --text-color: #697477;
        }
        
        /*===== Fuente y tipografia =====*/
        :root{
          --body-font: 'Montserrat', sans-serif;
          --big-font-size: 6.25rem;
          --h2-font-size: 1.25rem;
          --normal-font-size: .938rem;
          --small-font-size: .813rem;
        }
        
        
        .section-title{
                  margin : 100px  0px  50px ;
                  text-align:center;
                  text-transform:uppercase;
                  font-family: 'Fjalla One', sans-serif;
                  color: ${({theme}) => theme.colors.first};
   
                  h1 {
                  font-size: 3.4em;
                  }
         }

`;

export default GlobalStyles
