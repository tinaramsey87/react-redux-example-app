import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Input} from 'antd';
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';

const WhatDo = () => {
    const params: {who: string} = useParams();
    const dispatch = useDispatch();
    const [location, setLocation] = useState(params.who || 'loser');

    const handleChangeLocation = (e: ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    }

    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            dispatch(push(`/whatdo/${location}`));
        }
    }
    return (
        <div>What it do, {params.who || 'loser'}
            <Input value={location} onChange={handleChangeLocation} onKeyPress={handleEnter} />
        </div>
    )
}

export default WhatDo;