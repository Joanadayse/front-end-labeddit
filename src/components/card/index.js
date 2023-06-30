import { Icon } from "@chakra-ui/react"
import { CaixaComentarios, DivIcons } from "../styled-containers"
import { ArrowDownIcon, ArrowUpIcon, ChatIcon } from "@chakra-ui/icons"
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { TOKEN_NAME } from "../../constantes";

export const PostCard=(props)=>{
const {posts} = props;

// const context = useContext(GlobalContext);
// const { fetchPost } = context;

// const [isLoading, setIsLoading] = useState(false)


// const like = async () => {
//     setIsLoading(true)

//     try {
//       const token = window.localStorage.getItem(TOKEN_NAME);

//       const config = {
//         headers: {
//           Authorization: token
//         }
//       };

//       const body = {
//         like: true
//       }

//       await axios.put(BASE_URL + `/playlists/${playlist.id}/like`, body, config);

//       setIsLoading(false)
//       fetchPlaylists()
//     } catch (error) {
//       console.error(error?.response?.data);
//       window.alert(error?.response?.data)
//     }
//   };

    return(
        <CaixaComentarios>
        <p>Enviado por:{posts.creator.name}</p>
        <p>{posts.content}</p>
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