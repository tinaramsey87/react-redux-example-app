const initialState = {value:3, value2:0};

export const types = {SETSTATE:'COUNTER-SETSTATE'}
export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SETSTATE:
            return {...state, ...action.data}

        default:
            return state;
    }
};
export default reducers;

export const actions = {setState: (data) => ({type: types.SETSTATE, data})}