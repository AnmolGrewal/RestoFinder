export const registerUser = (firstName, lastName, gender, email, password, retypedpassword) => {
    return (dispatch) => {
        console.log("first Name", firstName)
        console.log("last Name", lastName)
        console.log("email", email)
        console.log("gender", gender)
        console.log("password", password)
        console.log("retypedpass", retypedpassword)
    }
}