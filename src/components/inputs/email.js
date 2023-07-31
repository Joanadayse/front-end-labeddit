import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputGroup,
  } from "@chakra-ui/react";

  export const EmailInput=({isValid,value,onChange})=>{


    return(
        <FormControl isInvalid={!isValid} px={8}>
        <Input
          placeholder="E-mail"
          name="email"
          value={value}
          onChange={onChange}
        />
         {!isValid ? (
          <FormErrorMessage>
            E-mail no formato inválido!
          </FormErrorMessage>
        ) :  undefined} 
      </FormControl>
    )
  }