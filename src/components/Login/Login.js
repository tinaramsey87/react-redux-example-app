import React from 'react';
import api from 'express-api';
import {Button} from 'antd';

const Login = () => {
    const handleLogin = async () => {
        try {
            await api.post('/user/login', {
                user: 'benny@gmail.com',
                password: 'butts123'
            });
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <Button type='primary' onClick={handleLogin}>LOGIN</Button>
    )
}

export default Login;