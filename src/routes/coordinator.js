export const  goToLoginPage= (navigator)=>{
    navigator("/login");
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