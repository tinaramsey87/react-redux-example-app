import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from './Counter.redux';
import {Button} from 'antd';

const Counter = ({start}) => {
    
    const dispatch = useDispatch(),
        {value, value2} = useSelector(state => state.counter);

    const incrementValue = useCallback(() => {
        dispatch(actions.setState({value: value + 1}));
    }, [value, dispatch])

    const incrementValue2 = () => {
        dispatch(actions.setState({value2: value2 + 1}));
    }
    useEffect(() => {
        if (start) {
            dispatch(actions.setState({value: start}));
        }
    }, [dispatch, start])
    return (
        <div>
            <h2>{value}</h2>
            <Button type='primary' onClick={incrementValue}>Increase</Button>
            <br />
            <h2>{value2}</h2>
            <Button onClick={incrementValue2}>Increase</Button>
        </div>);
}

export default Counter;
