import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import asynclist, {actions as asynclistActions} from './components/AsyncList/AsyncList.redux';
import counter, {actions as counterActions} from './components/Counter/Counter.redux';
import stupidform, {actions as stupidFormActions} from './components/StupidForm/StupidForm.redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import thunkMiddleware from 'redux-thunk';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
	}
}


export const history: History = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
						 ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
						 : compose;
let reducerTypes = {
	counter,
	asynclist,
	stupidform,
	router: connectRouter(history)
};


export const actions = {
	counter: counterActions,
	asynclist: asynclistActions,
	stupidform: stupidFormActions
};


export const createRootReducer = (history: History) => combineReducers(reducerTypes);


const store = createStore(
	createRootReducer(history),
	composeEnhancers(
		applyMiddleware(
			thunkMiddleware,
			routerMiddleware(history)
		),
	),
);


export default store;
