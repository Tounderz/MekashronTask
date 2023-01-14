import React, { useState } from 'react';
import CustomerDetails from '../componets/CustomerDetails';
import ModalWindow from '../componets/ModalWindow';
import { signUp } from '../http/auth';

const LoginPage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [error, setError] = useState(false);
    const [details, setDetails] = useState(null);
    const [message, setMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            const data = await signUp(userName, password);
            setDetails(data.customer);
            setMessage('Successful input!');
            setError(false);
        } catch (e) {
            setMessage(e.response.data.message);
            setDetails(null);
            setError(true);
        } finally {
            setModalVisible(true);
            setUserName('');
            setPassword('');
        }
    }

    return (
        <div className='container py-5 h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
                <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
                    <div className='card bg-dark text-white' style={{ bordeRadius: '1rem'}}>
                        <div className='card-body p-5 text-center'>
                            <div className='mb-md-5 mt-md-4 pb-5'>
                                <h2 className='fw-bold mb-2'>Sign In</h2>
                                <div className='form-outline form-white mb-4'>
                                    <label htmlFor='userNameInput' className='form-label'>Username</label>
                                    <input 
                                        className='form-control form-control-lg'
                                        id='userNameInput'
                                        type='text'
                                        onChange={e => setUserName(e.target.value)}
                                        placholder='UserName'
                                        value={userName}
                                    />
                                </div>
                                <div className='form-outline form-white mb-4'>
                                    <label htmlFor='passwordInput' className='form-label'>Password</label>    
                                    <input 
                                        className='form-control form-control-lg'
                                        id='passwordInput'
                                        type='password'
                                        onChange={e => setPassword(e.target.value)}
                                        placholder='Password'
                                        value={password}
                                    />                
                                </div>
                                <button className='btn btn-outline-light btn-lg px-5' onClick={login}>Login</button>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalWindow active={modalVisible} setActive={setModalVisible} error={error}>
                {!details ? <h3 className='text-center'>{message}</h3> : 
                    <form>
                        <h2 className='text-center'>{message}</h2>
                        <CustomerDetails details={details}/>
                    </form>
                }
            </ModalWindow>
        </div>
    );
};

export default LoginPage;