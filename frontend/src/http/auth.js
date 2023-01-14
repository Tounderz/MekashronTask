import axios from "axios";

export const signUp = async (userName, password) => {
    const {data} = await axios.post('https://localhost:44339/auth/login', { UserName: userName, Password: password} );
    return data;
}