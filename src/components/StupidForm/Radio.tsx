import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from './StupidForm.redux';
import {Radio as AntRadio} from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { FormElement, InitialFormState, RadioOption } from './FormTypes';

const Radio = ({dataKey, ...props}: FormElement) => {
    const dispatch = useDispatch(),
        value = useSelector((state: InitialFormState) => state.stupidform.values[dataKey]);

    const handleChange = (e: RadioChangeEvent) => {
        dispatch(actions.setValue({[dataKey]: e.target.value}));
    }
    return (
        <>
            <div>{props.label}</div>
            <AntRadio.Group
                value={value}
                style={{width: '100%'}}
                onChange={handleChange}
            >
                {
                    props.options.map((option: typeof RadioOption) => {
                        return <AntRadio key={option} value={option}>{option}</AntRadio>
                    })
                }
            </AntRadio.Group>
        </>
    )
}

export default Radio;