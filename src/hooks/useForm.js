import { useState } from "react"

export  const useForm= (inicialState)=>{
    const [form, setForm]=useState(inicialState)
  
    const onChangeInputs=(event)=>{
      const {name, value}= event.target
      setForm({...form,[name]:value})
      // setForm("")
     
     }

     const clearFields=()=>{
      setForm(inicialState)
     }
  
     return [form, onChangeInputs, clearFields]
  
  }