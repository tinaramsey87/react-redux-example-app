import { InitialCounterState } from "./CounterTypes";

const initialState: InitialCounterState = {
    value: 3,
    value2: 0,
    counter: 0
};


export const types = {SETSTATE:'COUNTER-SETSTATE'};


export const reducers = (state = initialState, action: { type: string; data: any; }) => {

    switch (action.type) {
        case types.SETSTATE:
            return {...state, ...action.data}

        default:
            return state;
    }
};


export default reducers;


export const actions = {setState: (data: any) => ({type: types.SETSTATE, data})}
