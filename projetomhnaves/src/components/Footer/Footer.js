import {ContainerFoot} from "./styled.footer"
import git from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"

function Footer(){
    return(
        <ContainerFoot>

      
            <p>{"< MHS >"}</p>
            <p>Desenvolvido por Marcos Hamilton</p>
            <a href="https://github.com/marcoshamil76" target="_blank">
                    <img src={git}className="git"></img>
            </a>

            <a href="https://www.linkedin.com/in/marcoshamil/" target="_blank">
                    <img src={linkedin}className="linkedin"></img>
            </a>
            
       
        </ContainerFoot>
    )
}
export default Footer