import styled from "styled-components";

export const ContainerFoot = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    font-family: 'Orbitron', sans-serif;
    color: cyan;
    background-color: #171b26;
    justify-content: center;
    font-size: 0.9rem;
    margin-bottom: 0;
    flex-shrink: 0;
    top: 100%;
    bottom: 0;
    border-top: 1px solid cyan;

    .git{
        margin-left: 3rem;
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .git:hover{
        transform: scale(1.1);
    }
    .linkedin{
        margin-left: 1rem;
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .linkedin:hover{
        transform: scale(1.1);
    }
    p{
        margin-left:2rem;
        
    }

`