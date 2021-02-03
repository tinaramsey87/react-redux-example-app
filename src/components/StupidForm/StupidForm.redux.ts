
import { Dispatch } from 'redux';
import api from '../../express-api';
import { InitialFormState } from './FormTypes';

const initialState: InitialFormState = {
    stupidform: {
        form: [],
        values: []
    },
    form: [],
    values: {}
};

export const types = {SETSTATE:'STUPIDFORM-SETSTATE', RESETSTATE:'STUPIDFORM-RESETSTATE'}
export const reducers = (state = initialState, action: { type: string; data: any; }) => {
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
    setState: (data: any) => ({type: types.SETSTATE, data}),


    resetState: () => ({type: types.RESETSTATE}),


    setValue: (data: any) => (dispatch: Dispatch, getState: Function): void => {
        dispatch(actions.setState({
            ...getState().stupidform,
            values: {...getState().stupidform.values, ...data}
        }));
    },


    getForm: () => async (dispatch: Dispatch, getState: Function): Promise<void> => {
        try {
            let response = await api.get('/forms/testform')
            dispatch(actions.setState({
                form: response.data.form
            }));
        } catch(e) {

        }
    }
}