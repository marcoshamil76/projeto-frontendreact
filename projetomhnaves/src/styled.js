import styled from "styled-components";
import background from "./assets/fundoterra.jpg"


export const Main = styled.div`

`

export const CardContainer = styled.div`
        width: 100%;
        flex-wrap:wrap;
        display: flex;
        flex-direction: center;
        justify-content: center;
        background-image: url(${background});
        background-size: cover;
        font-family: 'Orbitron', sans-serif;
        flex:1;
        min-height: 100vh;

`
