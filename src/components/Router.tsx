import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../store';
import Layout from '../Layout';
import NotFound from '../components/NotFound';


const Counter = lazy(() => import('./Counter/Counter')),
    AsyncList = lazy(() => import('./AsyncList/AsyncList')),
    WhatDo = lazy(() => import('./WhatDo')),
    StupidForm = lazy(() => import('./StupidForm/StupidForm')),
    Login = lazy(() => import('./Login/Login'));

const start: number = 0;

const Router = () => {
    return (
        <ConnectedRouter history={history}>
            <Route 
                render={({location}) => (
                    <Layout>
                        <Switch
                            location={location}
                            key={location.key}
                        >
                            <Route exact path='/'>
                                <div>Hi!</div>
                            </Route>

                            <Route exact path='/login'>
                                <Suspense fallback={<div>Loading</div>}>
                                    <Login />
                                </Suspense>
                            </Route>

                            <Route exact path='/counter'>
                                <Suspense fallback={<div>Loading</div>}>
                                    <Counter start={start}/>
                                </Suspense>
                            </Route>

                            <Route exact path='/asynclist'>
                                <Suspense fallback={<div>Loading</div>}>
                                    <AsyncList />
                                </Suspense>
                            </Route>

                            <Route exact path='/whatdo/:who?'>
                                <Suspense fallback={<div>Loading</div>}>
                                    <WhatDo />
                                </Suspense>
                            </Route>

                            <Route exact path='/stupidform'>
                                <Suspense fallback={<div>Loading</div>}>
                                    <StupidForm />
                                </Suspense>
                            </Route>

                            <Route component={NotFound}/>
                        </Switch>
                    </Layout>
                )}
            />
        </ConnectedRouter>
    )
}

export default Router;