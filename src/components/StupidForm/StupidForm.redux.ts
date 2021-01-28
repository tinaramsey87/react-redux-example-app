
import api from '../../express-api';

const initialState = {
    form: [],
    values: {}
};

export const types = {SETSTATE:'STUPIDFORM-SETSTATE', RESETSTATE:'STUPIDFORM-RESETSTATE'}
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


    resetState: () => ({type: types.RESETSTATE}),


    setValue: (data) => (dispatch, getState) => {
        dispatch(actions.setState({
            ...getState().stupidform,
            values: {...getState().stupidform.values, ...data}
        }));
    },


    getForm: () => async (dispatch, getState) => {
        try {
            let response = await api.get('/forms/testform')
            dispatch(actions.setState({
                form: response.data.form
            }));
        } catch(e) {

        }
    }
}