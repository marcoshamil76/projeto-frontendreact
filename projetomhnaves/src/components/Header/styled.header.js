import styled from "styled-components";

export const ContainerHeader = styled.div`
    background-color: #171b26;
    display: flex;
    align-items: center;
    margin-top: 0;
    justify-content: space-between;
    height: 7rem;
    border-bottom: 1px solid cyan;
    
    > img {
        
            width: 50rem;
            height: 3.8rem;
        }    
  

    .logoNave{
        width: 100vw;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .icone{
        margin-right: 16px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        
        
        :hover {
                cursor: pointer;
                filter: brightness(0.75);
            }
            :active {
                    border: 2px solid #7e90b1;
            }

    }
    .imgCarrinho{
        cursor: pointer;
        display: flex;
        width: 3.5rem;
        height: 3.5rem;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        img{
            width: 6.8rem;
            height: 6.8rem;
            border-radius: 50%;
            margin-right: 10rem;
        }
    }
    .imgCarrinho .qtyItens{
        display: flex;
        justify-content: center;
        align-items: center;
        color: cyan;
        font-size: 1.5rem;
        border: 5px cyan;
        background-color: black;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        border: 2px solid cyan;
        
        margin-right: 8rem;
        position: absolute;
    }
   
    
`
