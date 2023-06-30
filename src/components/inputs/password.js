import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
  } from "@chakra-ui/react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const PasswordInput=({isValid,value,onChange})=>{

const [show, setShow] = useState(false);
const handleClick = () => setShow(!show);

    return(
        <FormControl  isInvalid={!isValid} >
        <InputGroup size="md">
          <Input
          
            pr="4.5rem"
            // type="password"
            type={show ? "text" : "password"}
            placeholder="Senha"
            name="password"
            value={value}
            // autocomplete="on"
            onChange={onChange}
          />
           {!isValid ? (
          <FormHelperText>
            Senha no formato inválido!
          </FormHelperText>
        ) :  undefined}
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    )
}