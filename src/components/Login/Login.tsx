import React, { ReactElement } from 'react';
import api from '../../express-api'; // figure out  how to use the short hand imports with TS
import { LoginCredentials } from './LoginCredentials';
import { Button } from 'antd';

const Login = (): ReactElement => {
    const credentials: LoginCredentials = {
        user: 'benny@gmail.com',
        password: 'butts123'
    }


    const handleLogin = async (): Promise<void> => {
        try {
            await api.post('/user/login', credentials);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <Button type='primary' onClick={handleLogin}>LOGIN</Button>
    )
}

export default Login;