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
        <FormControl  isInvalid={!isValid} px={8}>
        <InputGroup >
          <Input        
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Senha"
            name="password"
            value={value}
            // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
            onChange={onChange}
            
          />
           {!isValid ? (
          <FormHelperText>
            Senha deve conter 8 caracteres sendo 1 letra maiuscula,1 letra minuscula,e numeros !
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