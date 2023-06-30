import { FormControl, FormHelperText, Input } from "@chakra-ui/react"

export const NameInput=({value,onChange,isValid})=>{
    return(
        <FormControl>
        <Input
            placeholder="Apelido"
            name="name"
            value={value}
            onChange={onChange}
          />
           {!isValid ? (
          <FormHelperText>
            Apelido deve conter pelo menos 2 caracteres!
          </FormHelperText>
        ) :  undefined}
        </FormControl> 
    )
}