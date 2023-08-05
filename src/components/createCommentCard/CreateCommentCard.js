import { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constantes";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Skeleton,
  Spinner,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";

export const CreateCommentCard = ({ fetchComments }) => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isContentValid, setIsContentValid] = useState(true);
  const [form, onChangeInputs, clearInputs] = useForm({
    content: "",
  });

  const createComment = async () => {
    try {
      setIsLoading(true);

      const token = window.localStorage.getItem("user.token");
      const config = {
        headers: {
          Authorization: token,
        },
      };

      const body = {
        content: form.content,
      };

      isContentValid &&
        (await axios.post(BASE_URL + `comments/${params.id}`, body, config));

      setIsLoading(false);
      clearInputs();
      window.alert("Comentário criado com sucesso!");
      fetchComments();
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response);
      window.alert(error?.response?.data);
    }
  };

  //   const onSubmit = (e) => {
  //     setIsContentValid(validateText(form.content))
  //     fetchComments()
  //    }

  return (
    <Flex minH={"10vh"} align={"start"} justify={"center"}>
      <Skeleton isLoaded={!isLoading} w="364px" borderRadius={"12px"}>
        <Stack
          spacing={4}
          mx={"auto"}
          maxW={"lg"}
          borderBottom={"1px"}
          borderBottomColor={"linear(90deg, #FF6489 0%, #F9B24E 100%)"}
        >
          <Box rounded={"lg"}>
            <form onSubmit={createComment}>
              <Stack spacing={2} pb={6} pt={2}>
                <FormControl id="content" isRequired>
                  <Textarea
                    name="content"
                    type="text"
                    value={form.content}
                    onChange={onChangeInputs}
                    placeholder="Adicionar comentário"
                    autoComplete="off"
                    bg={useColorModeValue("gray.50", "gray.800")}
                    w="364px"
                    h="131px"
                  />
                </FormControl>
                <Stack spacing={2}>
                  <Button
                    //   onClick={createComment}
                    type="submit"
                    bgGradient="linear(90deg, #FF6489 0%, #F9B24E 100%)"
                    boxShadow="2xl"
                    borderRadius="12px"
                    color={"white"}
                    _hover={{
                      bg: "orange.500",
                    }}
                  >
                    {isLoading ? <Spinner /> : "Responder"}
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Skeleton>
    </Flex>
  );
};
