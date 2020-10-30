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
        font-family: sans-serif;
        background-size: cover;
    }

`