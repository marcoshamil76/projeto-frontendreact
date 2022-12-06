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

            <a href="https://www.linkedin.com/in/marcos-hamilton-santos-1ab582168?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgsTi%2FN3RT0ayhTSxBLOOxQ%3D%3D" target="_blank">
                    <img src={linkedin}className="linkedin"></img>
            </a>
            
       
        </ContainerFoot>
    )
}
export default Footer