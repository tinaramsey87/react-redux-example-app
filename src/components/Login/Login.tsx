import React, { ReactElement } from 'react';
import api from '../../express-api'; // figure out  how to use the short hand imports with TS
import {Button} from 'antd';

interface Credentials {
    user: string,
    password: string
}

const Login = (): ReactElement => {
    const credentials: Credentials = {
        user: 'benny@gmail.com',
        password: 'butts123'
    }
    const handleLogin = async () => {
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