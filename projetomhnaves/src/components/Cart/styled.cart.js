import styled from "styled-components";

export const ContainerMain = styled.main`
    background-image: url("./imgs/fundoterra.jpg");
    background-size:cover;
    display: flex;
    width: 70vw;
    height: 20vh;
    margin: 1rem;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0.32); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0.32);
    font-family: 'Orbitron', sans-serif;



.divImg {
    width: 8rem;
    height: 8rem;
    margin: 1rem;
    display: flex;
    align-items: center;
    
    img {
        
        width: 9rem;
        height: 9rem;
    }
}
.nomeEValor{
    margin: 0.5rem;
    width: 15rem;
    color: bisque;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.valor{
    margin-top: 1rem;
    color: cyan;
}

.qtyETotal{
    padding: 0.5rem;
    width: 18rem;
    margin: 0.5rem;
    color: cyan;
    font-size: 1rem;
    display: flex;
    flex-direction: column;

   
    

    .botao{
    display: flex;
    flex-direction: row;
    cursor: pointer;

    button:hover{
        color:black;
        background-color: cyan;
        transform: scale(1.1);

    }
    
    p {
        color: bisque;
    }
    
}

}

.qtyETotal .botao button{
    
        width: 2rem;
        height: 2rem;
        margin: 0.5rem;
        border-radius: 20%;
        background-color: transparent;
        border:1px solid cyan;
        color: cyan;
    
}
.qtde{
    margin-top: 1rem;
    font-size: 1.1rem;
}

.totalProduto{
    justify-content: center;
    align-items: center;
    
}


`