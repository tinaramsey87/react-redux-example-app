import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from './StupidForm.redux';
import {Radio as AntRadio} from 'antd';

const Radio = ({dataKey, ...props}) => {
    const dispatch = useDispatch(),
        value = useSelector(state => state.stupidform[dataKey]);

    const handleChange = (e) => {
        dispatch(actions.setState({[dataKey]: e.target.value}));
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
                    props.options.map((option) => {
                        return <AntRadio key={option} value={option}>{option}</AntRadio>
                    })
                }
            </AntRadio.Group>
        </>
    )
}

export default Radio;