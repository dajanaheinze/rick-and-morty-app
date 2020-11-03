import {createGlobalStyle} from 'styled-components/macro'
import help from './assets/help.jpg';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    #root{
        height: 100vh;
    }

    body {
        font-size: 112.5%;
        background-image: url(${help});
        margin: 0;
        font-family: Fantasy;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    button:focus, textarea:focus, input:focus{
        outline: none;
    }
    a:link {
        text-decoration: none;
      }
      
      a:visited {
        text-decoration: none;
      }
      
      a:hover {
        text-decoration: underline;
      }
      
      a:active {
        text-decoration: underline;
      }
`