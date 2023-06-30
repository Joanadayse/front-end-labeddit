import { DivHeader} from "./styled"
import logo from "../../assests/logo-smal.png"
import { goToLoginPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

export const Header =()=>{
  const navigate= useNavigate()
    return(
      <DivHeader>
      <img src={logo} />
      <button onClick={()=>goToLoginPage(navigate)}>login</button>
      <button onClick={()=>goToLoginPage(navigate)}>logount</button>
    </DivHeader>
    )
}