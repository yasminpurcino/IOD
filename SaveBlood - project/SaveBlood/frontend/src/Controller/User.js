// funcao para comparar usuario login e senha com o q tem no DB


async function getUser(email, password) {
    let loginUser = false
    const response = await fetch("http://localhost:8080/api/users?email=" + email)
    const data = await response.json();
    console.log(data)

    if (data.message) {
        loginUser = false
    } else {


        let pwd = data.password
        console.log(pwd)
        console.log(password)
        if (pwd === password) {
            console.log("correct")
            loginUser = data


        } else {
            console.log("Wrong Password")
            return false
        }
    }

    return loginUser

}

export default getUser
