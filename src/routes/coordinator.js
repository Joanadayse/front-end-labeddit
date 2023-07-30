export const  goToLoginPage= (navigator)=>{
    navigator("/");
}
export const  goToSignupPage= (navigator)=>{
    navigator("/signup");
}
export const  goToPostsPage= (navigator)=>{
    navigator("/posts");
}
export const  goToDetailsPage= (navigator, id)=>{
    navigator(`/details/${id}`);
}