import styled from "styled-components";

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: black;
    background-size:cover;
    color: cyan;
    height: 2rem;
    
    input {
        background-color: transparent;
        color: cyan;
        border: 1px solid cyan;
        margin-left: 1rem;
        border-radius: 3px;
        ::placeholder{
            text-align: center;
        }
       
        }

    select {
        background-color: transparent;
        border: 1px solid cyan;
        margin-left: 1rem;
        border-radius: 3px;
        color: grey;
    }

    label {
        margin-left: 1rem;
    }
   

`

