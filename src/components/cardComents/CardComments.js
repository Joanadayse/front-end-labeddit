import { Box, Center, Flex, HStack, Text } from "@chakra-ui/react";
import { ArrowUpFillIcon, ArrowUpIcon } from "../../icons/ArrowUpIcon";
import { ArrowDownFillIcon, ArrowDownIcon } from "../../icons/ArrowDownIcon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const CardComments = ({
  comment,
  handleLike,
  handleDislike,
  isLoading,
}) => {
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [disliked, setDisLiked] = useState(false);
  return (
    <Center pt={2}>
      {}
      <Box
        w="364px"
        borderRadius={"12px"}
        overflow={"hidden"}
        bg="#FBFBFB"
        border={"1px"}
        borderColor="#E0E0E0"
      >
        <Box py={1} px={2}>
          <Box
            display={"inline-block"}
            w={"100%"}
            h={"16px"}
            color="#6F6F6F"
            mb={4}
          >
            <Text
              fontSize={"12px"}
              fontFamily={"IBM Plex Sans"}
              fontStyle="normal"
              fontWeight="400"
            >
              Enviado por: {comment?.commentCreatorNickName}
            </Text>
          </Box>
          <Box mb={4}>
            <Text color={"gray.500"} noOfLines={2}>
              {comment?.content}
            </Text>
          </Box>
        </Box>
        <HStack>
          <HStack
            w={"105px"}
            minH={"28px"}
            border={"1px solid #ECECEC"}
            borderRadius={"28px"}
            justifyContent={"space-between"}
            m={2}
          >
            <Flex p={1} cursor="pointer" onClick={() => handleLike(comment.id)}>
              {liked ? (
                <ArrowUpFillIcon fill="#008000" fontSize={"24px"} />
              ) : (
                <ArrowUpIcon fontSize={"24px"} />
              )}
            </Flex>
            <Box p={1} cursor="pointer">
              <Text
                fontSize={"9.5px"}
                fontFamily={"IBM Plex Sans"}
                fontStyle="normal"
                fontWeight="400"
                color={"gray.500"}
              >
                {comment?.likes}
              </Text>
              <Text
                fontSize={"9.5px"}
                fontFamily={"IBM Plex Sans"}
                fontStyle="normal"
                fontWeight="400"
                color={"gray.500"}
              >
                {comment?.dislikes}
              </Text>
            </Box>
            <Flex
              p={1}
              cursor="pointer"
              onClick={() => handleDislike(comment.id)}
            >
              {disliked ? (
                <ArrowDownFillIcon fill="#ff0000" fontSize={"24px"} />
              ) : (
                <ArrowDownIcon fontSize={"24px"} />
              )}
            </Flex>
          </HStack>
        </HStack>
      </Box>
      {}
    </Center>
  );
};
