import {ContainerResume} from "./styled.resume"
import {priceFormatter} from "../../utils/priceFormatter"
import Modal from "react-modal"
import {useState} from "react"

Modal.setAppElement("#root")
function ResumeCart (props){
    const [modalIsOpen, setIsOpen]= useState(false)
    function openModal(){
        setIsOpen(true)
    }
    function closeModal(){
        setIsOpen(false)
        props.limparCart()
    }
    return(

    <ContainerResume>
        <div>
                    <div className="valorTotal">
                        <h1>Valor Total</h1>
                        <p> {priceFormatter.format(props.total)}</p>
                    </div>
                <div className="limparEComprar">
                    <button onClick={()=>props.limparCart()}>Limpar Carrinho</button>
                    <button onClick={props.goToProductsScreen}>Continuar Comprando</button>
                </div>
                <div className="finalizaPedido">
                    <button onClick={openModal} >Finalizar Pedido</button>
                    <img src="./imgs/astrodev.png"></img>
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
                top: '10vh',
                left: '20vw',
                right: '20vw',
                bottom: '40px',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '25px',
                outline: 'none',
            }
          }}
          >
            <img src="../../imgs/finalizarpedido.jpg"></img>
        </Modal>
        </ContainerResume>
    )
}
export default ResumeCart