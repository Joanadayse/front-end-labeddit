import { Icon } from "@chakra-ui/react"
import { CaixaComentarios, DivIcons } from "../styled-containers"
import { ArrowDownIcon, ArrowUpIcon, ChatIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../routes/coordinator"


export const PostCard=(props)=>{
 
const {posts} = props;
const navigate= useNavigate()

const onClickCard=(id)=>{
    console.log(id)
    goToDetailsPage(navigate,id)
}

// console.log(posts.creator.name)

// quando chega nessa pagina ele dar o seguinte erro:"Cannot read properties of undefined (reading 'creator')
// TypeError: Cannot read properties of undefined (reading 'creator') , mas vai com o id do post"
    return(
        <CaixaComentarios onClick={()=>onClickCard(posts.creator.id)} >
        {/* <CaixaComentarios onClick={()=>goToDetailsPage(navigate)} > */}
        <p>Enviado por:{posts.creator.name}</p>
        {/* <p>Enviado por:</p> */}
        <p>{posts.content}</p>
        {/* <p>comentario</p> */}
        <DivIcons>
        <Icon as={ArrowDownIcon} w={8} h={5} />
        <p>1,20</p>
        <Icon as={ArrowUpIcon} w={8} h={5}  />
        <p>1,20</p>
        <Icon as={ChatIcon} w={5} h={5}  />
        </DivIcons>
    </CaixaComentarios>
    )
}