import { DivCardNave, DivCardNaveContainer } from "./styled.cardnave";
import produtos from "../../assets/produtos.json"
import {priceFormatter} from "../../utils/priceFormatter"
import Modal from "react-modal"
import { useState } from "react";


Modal.setAppElement("#root")
function CardNave (props){
  
    const {adicionaCarrinho} = props
    const [modalIsOpen, setIsOpen]= useState(false)
    function openModal(){
        setIsOpen(true)
    }
    function closeModal(){
        setIsOpen(false)
    }

       
    return(
        
        <DivCardNave>
            
           <div className="cardNaves">
                    <div>
                            <h1>{props.produto.name}</h1>
                            <h3>{priceFormatter.format(props.produto.valor)}</h3>
                    </div>  
                
                <div className="footer-card">
                    <div className="detalhes-compra">
                            <button onClick={()=>props.onAdd(props.produto)}>Comprar</button>
                            <span onClick={openModal}>Detalhes</span>
                    </div>
                    <img src={props.produto.imageUrl} alt={(props.produto.alt)}></img>
                </div>
                        
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel = "Detalhes"
                overLayClassNome="modal-overlay"
                className="modal-content"
                animationType='slide'
                
  style={{
    content: {
        display:'flex',
        alignItems:'center',
        marginLeft:'auto',
        justifyContent:'center',
        position: 'absolute',
        top: '20vh',
        left: '20vw',
        right: '20vw',
        bottom: '40px',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '25px',
        outline: 'none',
    }
  }}
            >
                    <img className="imgModal" src={props.produto.detalhes} ></img>
            </Modal>
            
        </DivCardNave>
         
    )
}
export default CardNave