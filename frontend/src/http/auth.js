import axios from 'axios';

export const signUp = async (userName, password) => {
    const {data} = await axios.post('http://mekashronTask.somee.com/auth/login', { UserName: userName, Password: password }, { mode: 'cors' } );
    return data;
}