import axios from "axios"

export const login= async(body)=>{
  const {data}= await axios.post(BASE_URL + "users/login",body)
  return data
}
export const signup=async(body)=>{
   const {data}=await axios.post(BASE_URL + "users/signup",body)
   return data
}



export const validateEmail= email =>/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email)
export const validatePassword= password =>/.{6,}/.test(password)
// export const validatePassword= password =>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
export const validateName= name =>/.{2,}/.test(name)

export const BASE_URL= "http://localhost:3003/"
// export const BASE_URL= "https://labeddit-jd.onrender.com/"

