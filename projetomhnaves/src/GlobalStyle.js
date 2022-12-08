import styled, {createGlobalStyle} from "styled-components"
import background from "./assets/fundo.jpg"

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Orbitron', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .Cards {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: center;
        justify-content: space-between;
        background-image: url(${background});
        background-size: cover;
        height: 100%;
        
    }
`
