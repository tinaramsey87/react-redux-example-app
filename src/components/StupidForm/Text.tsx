import React, { ChangeEvent } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from './StupidForm.redux';
import {Input} from 'antd';
import { InitialFormState, FormElement } from './FormTypes';

const Text = ({dataKey, ...props}: FormElement) => {
    const dispatch = useDispatch(),
        value = useSelector((state: InitialFormState) => state.stupidform.values[dataKey]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.setValue({[dataKey]: e.target.value}));
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