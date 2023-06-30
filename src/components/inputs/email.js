import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputGroup,
  } from "@chakra-ui/react";

  export const EmailInput=({isValid,value,onChange})=>{

    // const [input, setInput] = useState('')
    // const handleInputChange = (e) => setInput(e.target.value)
    // const isValid = input === ''

    return(
        <FormControl isInvalid={!isValid} >
        {/* // <FormControl > */}
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