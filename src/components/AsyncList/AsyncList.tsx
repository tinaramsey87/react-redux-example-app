import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import {AsyncListInitialState} from './AsyncListTypes.d';
import {actions} from './AsyncList.redux';
import ListItem from './ListItem';
import { Button, Row, Col } from 'antd';

const AsyncList = () => {
    const dispatch: Dispatch = useDispatch(),
        {users, loading, loaded} = useSelector((state: AsyncListInitialState) => state.asynclist);


    useEffect(() => {
        if (!loading && !loaded) {
            dispatch<any>(actions.fetchUsers());
        }
    }, [dispatch, loading, loaded]);


    useEffect(() => {
        return () => {
            dispatch(actions.resetState())
        } // runs when component unmounts
    }, [dispatch]);


    return (
        <>
            <div className="App-container">
                <Button onClick={() => {dispatch(actions.resetState())}}>Reload</Button>
            </div>

            <div className="App-container">
                {loading && <p>Loading</p>}
                {(loaded && !loading) &&
                <Row gutter={[16,16]}>
                    {users.map((user: any, index: number) => 
                        <Col
                            key={user.id}
                            span="{{
                                xs: 24,
                                md: 12,
                                lg: 8,
                                xl: 6
                            }}"
                        >
                            <ListItem dataKey={index} />
                        </Col>
                    )}
                </Row>
                }
            </div>
        </>
    );
}

export default AsyncList;