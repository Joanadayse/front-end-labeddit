import { useContext, useEffect, useState } from "react"
import { Box, Center, HStack, Icon, Skeleton,Text,Flex, Image } from "@chakra-ui/react"
import { GlobalContext } from '../../context/GlobalContext'
import { useLocation, useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../routes/coordinator"
import axios from "axios"
import ballon from "../../assests/comment-button.svg"

import { ArrowUpIcon, ArrowUpFillIcon } from '../../icons/ArrowUpIcon'
import { ArrowDownFillIcon, ArrowDownIcon } from '../../icons/ArrowDownIcon'


export const PostCard=({ post, handlePostLike, handlePostDislike, liked, disliked  })=>{

    const navigate = useNavigate()
    const location = useLocation()
    const context = useContext(GlobalContext)
    const { fetchPosts, isLoading } = context

    
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisLiked] = useState(false)   
    
      useEffect(() => {
        fetchPosts()
        
       }, [ liked, disliked ])


    return(
      <Center pt={2}>
      <Skeleton
      isLoaded={!isLoading}
      w="364px"
      borderRadius={'12px'}
      >
      <Box
          w="364px"
          h={"150px"}
          borderRadius={'12px'}
          overflow={'hidden'}
          bg="#FBFBFB"
          border={'1px'}
          borderColor="#E0E0E0"
      >
          <Box py={1} px={2}>
              <Box display={'inline-block'} w={"100%"} h={'16px'} color="#6F6F6F" mb={4}
              >
                  <Text
                      fontSize={'12px'}
                      fontFamily={'IBM Plex Sans'}
                      fontStyle='normal'
                      fontWeight='400'
                  >
                      Enviado por: {post?.creator?.nickName}
                  </Text>
              </Box>
              <Box mb={4}>
                  <Text color={'gray.500'} noOfLines={2}>
                     {post?.content}
                  </Text>
              </Box>
          </Box>
          <HStack>
              <HStack
                  w={'105px'}
                  minH={'28px'}
                  border={'1px solid #ECECEC'}
                  borderRadius={'28px'}
                  justifyContent={'space-between'}
                  m={2}
              >
                  {location.pathname === '/posts'? (
                      <Flex
                      p={1}
                      cursor="pointer"
                      onClick={() => handlePostLike(post.id)}
                  >
                      {isLiked ? (
                          <ArrowUpFillIcon fill="#008000" fontSize={'24px'} /> 
                      ) : (
                          <ArrowUpIcon fontSize={'24px'} />
                      )}
                  </Flex>) : (<Flex
                      p={1}
                      cursor="pointer"
                      //  onClick={() => handlePostLike(post.id)}
                  >
                      {isLiked ? (
                          <ArrowUpFillIcon fill="#008000" fontSize={'24px'} /> 
                      ) : (
                          <ArrowUpIcon fontSize={'24px'} />
                      )}
                      </Flex>)
                  }
                  <Box
                      p={1}
                      cursor="pointer"                            
                  >
                      <Text 
                          fontSize={'9.5px'}
                          fontFamily={'IBM Plex Sans'}
                          fontStyle='normal'
                          fontWeight='400'color={'gray.500'}
                      >
                          {post?.likes}
                      </Text>
                      <Text  fontSize={'9.5px'} fontFamily={'IBM Plex Sans'} fontStyle='normal' fontWeight='400'color={'gray.500'}
                      >
                          {post?.dislikes}
                      </Text>
                  </Box>
                  {location.pathname === '/posts'? (
                      <Flex
                      p={1}
                      cursor="pointer"
                      onClick={() => handlePostDislike(post.id)}
                  >
                      {isDisliked ? (
                          <ArrowDownFillIcon fill="#ff0000" fontSize={'24px'} /> 
                      ) : (
                          <ArrowDownIcon fontSize={'24px'} />
                      )}
                  </Flex>) : (<Flex
                      p={1}
                      cursor="pointer"
                  >
                      {isDisliked ? (
                          <ArrowDownFillIcon fill="#ff0000" fontSize={'24px'} /> 
                      ) : (
                          <ArrowDownIcon fontSize={'24px'} />
                      )}
                      </Flex>)
              }
              </HStack>
              <HStack w={'65px'} minH={'28px'} border={'1px solid #ECECEC'} borderRadius={'28px'} justifyContent={'center'} m={2} p={'1px'}
              >
                  <Flex 
                      p={1} 
                      cursor="pointer" 
                      onClick={() => goToDetailsPage(navigate, post.id)}
                  >
                    
                    <Image src={ballon} alt={"balão de mensagem"} /> 
                  </Flex>
                  <Flex p={1} cursor="pointer">
                      <Text 
                          fontSize={'9.5px'} 
                          fontFamily={'IBM Plex Sans'}
                          fontStyle='normal'
                          fontWeight='400'
                          color={'gray.500'}
                      >
                          {post?.replies}
                      </Text>
                  </Flex>
              </HStack>
          </HStack>
      </Box>
      </Skeleton>
  </Center>
    )
}