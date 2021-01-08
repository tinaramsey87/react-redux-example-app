import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from './StupidForm.redux';
import {Input} from 'antd';

const Text = ({dataKey, ...props}) => {
    const dispatch = useDispatch(),
        value = useSelector(state => state.stupidform[dataKey]);

    const handleChange = (e) => {
        dispatch(actions.setState({[dataKey]: e.target.value}));
    }
    return (
        <Input 
            value={value}
            style={{width: '100%'}}
            addonBefore={props.label}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            onChange={handleChange} 
        />
    )
}

export default Text;