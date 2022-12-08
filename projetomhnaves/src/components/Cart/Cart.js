import React from "react";
import ResumeCart from "../ResumeCart/ResumeCart";
import { ContainerMain, ContainerResume } from "./styled.cart";
import { useReducer } from "react";
import {priceFormatter} from "../../utils/priceFormatter"
 function Cart(props){
const{ produto } = props

return(
    <>
    <ContainerMain>
        
                <div className="divImg">
                    <img src={props.produto.imageUrl} alt={(props.produto.alt)}></img>
                </div>
            
                <div className="nomeEValor">
                    <h2>{props.produto.name}</h2>
                    <h2 className="valor"> {priceFormatter.format(props.produto.valor)}</h2>
                </div>

                <div className="qtyETotal">
                    <div className="botao">
                        <button onClick={()=>props.onRemove(props.produto)}>-</button>
                            <p className="qtde">Quantidade: {props.produto.qty}</p>
                        <button onClick={()=>props.onAdd(props.produto)}>+</button>
                    </div>
                    
                    <div className="totalProduto">
                         <p>Total: {priceFormatter.format(props.produto.qty * props.produto.valor)} </p>
                    </div>
                </div>
                    
    </ContainerMain>
    </>
)

}
export default Cart