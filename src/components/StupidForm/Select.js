import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from './StupidForm.redux';
import {Select as AntSelect} from 'antd';

const Select = ({dataKey, ...props}) => {
    const dispatch = useDispatch(),
        value = useSelector(state => state.stupidform.values[dataKey]);

    const handleChange = (value) => {
        dispatch(actions.setValue({[dataKey]: value}));
    }
    return (
        <AntSelect value={value} style={{width: '100%'}} onChange={handleChange}>
            {
                props.options.map((option) => {
                    return <AntSelect.Option key={option.value} value={option.value}>{option.label}</AntSelect.Option>
                })
            }
        </AntSelect>
    )
}

export default Select;