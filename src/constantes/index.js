import axios from "axios"

export const login= async(body)=>{
  const {data}= await axios.post("http://localhost:3003/users/login",body)
  return data
}
export const signup=async(body)=>{
   const {data}=await axios.post("http://localhost:3003/users/signup",body)
   return data
}

export const validateEmail= email =>/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email)
// export const validateEmail= email =>/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(email)
export const validatePassword= password =>/.{6,}/.test(password)
export const validateName= name =>/.{2,}/.test(name)

export const TOKEN_NAME = "labefy-token"
