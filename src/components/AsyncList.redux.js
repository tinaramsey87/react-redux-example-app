import api from 'api';
import bullshitPromise from 'axios.promise';
import { message } from 'antd';

const initialState = {users: [], loading: false, loaded: false, editing: null, editData: null};

export const types = {SETSTATE:'ASYNCLIST-SETSTATE', RESETSTATE:'ASYNCLIST-RESETSTATE'}
export const reducers = (state = initialState, action) => {
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

export const actions = {
    setState: (data) => ({type: types.SETSTATE, data}),
    fetchUsers: () => async (dispatch, getState) => {
        dispatch(actions.setState({loading: true}))
        try {
            let users = await bullshitPromise(api.get('/users'));
            dispatch(actions.setState({users: users.data, loading: false, loaded: true}));
            message.success('YAAAAYYY here is some bullshit', 5);
        } catch {
            dispatch(actions.setState({users: [], loading: false, loaded: true}));
            message.error('you fucked up', 5);
        }
    },
    fetchUser: (index) => async (dispatch, getState) => {
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
    editUser: (index, data) => async (dispatch, getState) => {
        let users = getState().asynclist.users,
            user = {...users[index], ...data},
            newUsers = [
                ...users.slice(0, index),
                user,
                ...users.slice(index + 1)
            ];
        dispatch(actions.setState({users: newUsers}));
    },
    editUserData: (data) => async (dispatch, getState) => {
        let editData = getState().asynclist.editData;
        dispatch(actions.setState({editData: {...editData, ...data}}));
    },
    editAddress: (key, value) => async (dispatch, getState) => {
        let editData = getState().asynclist.editData;
        dispatch(actions.setState({editData: {...editData, address: {...editData.address, [key]: value}}}));
    },
    toggleUserEdit: (index) => (dispatch, getState) => {
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