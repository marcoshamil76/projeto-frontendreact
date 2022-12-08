import React from 'react';
import logonaves from '../../assets/logo-mhnaves.jpg';
import carrinho from '../../assets/carrinho2.jpg'
import { ContainerHeader } from './styled.header';

function Header(props) {
    console.log(props.cartProducts)
    return (
        
        <ContainerHeader>
            <div className='logoNave'>
                <img onClick={props.goToCartScreen} src={logonaves}></img>
                
            </div>
            <div  className='imgCarrinho'>
                <img onClick={props.goToCartScreen} src={carrinho}></img>
                {props.cartProducts > 0?<span className='qtyItens'>{props.cartProducts}</span>:<p></p>}
            </div>
            
        </ContainerHeader>
    )
}
export default Header