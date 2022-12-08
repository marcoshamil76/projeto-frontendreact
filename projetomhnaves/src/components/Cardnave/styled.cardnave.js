import styled from "styled-components";
import imagem from "../../assets/fundo.jpg"



export const DivCardNave = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 30vw;
    padding: 10px;
    margin-top: 16px;
    /* border-radius: 10px; */
    color: white;
    gap: 20px;
    
    img{
        transition: transform 0.5s;
            } 

    img:hover{
        transform: rotate(1deg);
    }
    
   
    .cardNaves{
        gap: 20px;
        border-radius: 10px;
        :hover {
        background-color: #171b26;
        border: 1px solid cyan;
        box-shadow: inset 0 0 2em 0 #09daf2, 0 0 2em 0 #09daf2;
        
        .footer-card{
            background-image: url(${imagem});
            background-size: cover;
            border: 1px solid #09daf2;
           
        }

    }
    }
    
    
    h1, h3 {
        text-align: center;
    }
    h3{
        color: cyan;
    }
    .footer-card{
        width: 100%;
        margin-top: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
    }
    .detalhes-compra{
        display: flex;
        flex-direction: column;
        margin: 0;
       
    }

    button {
        font-family: 'Orbitron', sans-serif;
        border:2px solid #ffffff;
        position: relative;
        text-transform: capitalize;
        text-decoration:none;
        color: #ffffff;
        background-color: transparent;
        cursor: pointer;
        font-size: .8rem;
        border-radius: 5px;
        transition:0.4s;
        width: 5.5rem;
        margin-left: 1rem;
        text-shadow: 0 0 0.125em rgba(0, 0, 0, 0.5), 0 0 0.25em currentColor;
        box-shadow: inset 0 0 0.5em 0 #ffffff, 0 0 0.5em 0 #ffffff;
        :hover{
            color: #3BF1F4;
            border:2px solid #3BF1F4;
            transition:0.4s;
            text-shadow: none;
            box-shadow: inset 0 0 0.5em 0 #3BF1F4, 0 0 0.5em 0 #3BF1F4;
        }
    }

    span {
        padding: 10px;
        margin-left: 1.2rem;
        font-size: .8rem;
        :hover{
            cursor: pointer;
            color: cyan;
        }

    }

`
