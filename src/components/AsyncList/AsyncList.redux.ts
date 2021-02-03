import { Dispatch } from 'react';
import { Action, AnyAction, Dispatch as ReduxDispatch } from 'redux';
import {AsyncListInitialState} from './AsyncListTypes.d';
import api from '../../api';
import bullshitPromise from '../../axios.promise';
import { message } from 'antd';


const initialState: AsyncListInitialState = {
    users: [], 
    loading: false, 
    loaded: false, 
    editing: null, 
    editData: null,
    asynclist: {
        users: [],
        editData: null,
        editing: null
    }
};


export const types = {
    SETSTATE:'ASYNCLIST-SETSTATE',
    RESETSTATE:'ASYNCLIST-RESETSTATE',
    FETCHUSERS: 'ASYNCLIST-FETCHUSERS'
}


export const reducers = (state: AsyncListInitialState = initialState, action: { type: string; data: any; }) => {
    switch (action.type) {
        case types.SETSTATE:
            return {...state, ...action.data}
        
        case types.RESETSTATE:
            return {...initialState}

        default:
            return state;
    }
};


export default reducers;

interface FetchUsersAction extends Action {
    type: string,
    data: any
}

export const actions = {
    setState: (data: any) => ({type: types.SETSTATE, data}),
    fetchUsers: () => async (dispatch: ReduxDispatch<FetchUsersAction>): Promise<void> => {
        dispatch(actions.setState({loading: true}));
        try {
            let users = await bullshitPromise(api.get('/users'));
            dispatch(actions.setState({users: users.data, loading: false, loaded: true}));
            message.success('YAAAAYYY here is some bullshit', 5);
        } catch {
            dispatch(actions.setState({users: [], loading: false, loaded: true}));
            message.error('you fucked up', 5);
        }
    },
    fetchUser: (index: number) => async (dispatch: Dispatch<AnyAction>, getState: Function) => {
        try {
            let users = getState().asynclist.users,
                userId = users[index].id,
                user = await bullshitPromise(api.get(`/users/${userId}`)),
                newUsers = [
                    ...users.slice(0, index),
                    user.data,
                    ...users.slice(index + 1)
                ];
            dispatch(actions.setState({users: newUsers}));
            message.success('YAAAAYYY', 5);
        } catch {
            message.error('Could not get user', 5);
        }
    },
    editUser: (index: number, data: any) => async (dispatch: Dispatch<AnyAction>, getState: Function) => {
        let users = getState().asynclist.users,
            user = {...users[index], ...data},
            newUsers = [
                ...users.slice(0, index),
                user,
                ...users.slice(index + 1)
            ];
        dispatch(actions.setState({users: newUsers}));
    },
    editUserData: (data: any) => async (dispatch: Dispatch<AnyAction>, getState: Function) => {
        let editData = getState().asynclist.editData;
        dispatch(actions.setState({editData: {...editData, ...data}}));
    },
    editAddress: (key: string, value: string) => async (dispatch: Dispatch<AnyAction>, getState: Function) => {
        let editData = getState().asynclist.editData;
        dispatch(actions.setState({editData: {...editData, address: {...editData.address, [key]: value}}}));
    },
    toggleUserEdit: (index: number) => (dispatch: Dispatch<AnyAction>, getState: Function) => {
        let editing = getState().asynclist.editing,
            user = {...getState().asynclist.users[index]};
        let users = getState().asynclist.users;
        if (editing === null) {
            dispatch(actions.setState({editing: index, editData: user}));
        } else {
            const editData = getState().asynclist.editData;
            let newUsers = [
                ...users.slice(0, index),
                {...editData},
                ...users.slice(index + 1)
            ];
            dispatch(actions.setState({editing: null, editData: null, users: newUsers}));
        }
    },
    resetState: () => ({type: types.RESETSTATE}),
}