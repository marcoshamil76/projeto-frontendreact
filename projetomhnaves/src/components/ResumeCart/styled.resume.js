import styled from "styled-components"

export const ContainerResume =styled.div`
    width: 25vw;
    height: 70vh;
    display: flex;
    margin-left: 73vw;
    position: fixed;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    color: white;
    text-align:center;
    background-image: url("./imgs/universo2.jpg");
    background-size:cover;
    background-position: end;
    border-radius: 5%;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0.32); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0.32);
    font-family: 'Orbitron', sans-serif;



img{
    width: 13rem;
    align-items: flex-end;
    margin-right: 1rem;
    align-items: flex-end;
}

button {
        font-family: 'Orbitron', sans-serif;
        border:2px solid #ffffff;
        position: relative;
        text-transform: capitalize;
        text-decoration:none;
        color: #ffffff;
        background-color: black;
        cursor: pointer;
        font-size: 1rem;
        border-radius: 5px;
        transition:0.4s;
        width: 9rem;
        padding: 0.2rem;
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

.valorTotal{
    margin-top: 2rem;
    p {
        font-size: 1.5rem;
        font-weight:bold;
        color: cyan;
    }
}

.limparEComprar{
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.finalizaPedido{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    

    img {
        margin-left: 5rem;
    }

}

`