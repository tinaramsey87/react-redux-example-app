import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from './StupidForm.redux';
import {Select as AntSelect} from 'antd';
import { FormElement, FormOptionItem, InitialFormState } from './FormTypes';

const Select = ({dataKey, ...props}: FormElement) => {
    const dispatch = useDispatch(),
        value = useSelector((state: InitialFormState) => state.stupidform.values[dataKey]);

    const handleChange = (value: string) => {
        dispatch(actions.setValue({[dataKey]: value}));
    }
    return (
        <AntSelect value={value} style={{width: '100%'}} onChange={handleChange}>
            {
                props.options.map((option: FormOptionItem) => {
                    return <AntSelect.Option key={option.value} value={option.value}>{option.label}</AntSelect.Option>
                })
            }
        </AntSelect>
    )
}

export default Select;