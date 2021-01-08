
const initialState = {};

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


    
}