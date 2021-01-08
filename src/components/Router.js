import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {history} from 'store';
import Layout from 'Layout';
import NotFound from 'components/NotFound';

const Counter = lazy(() => import('components/Counter')),
    AsyncList = lazy(() => import('components/AsyncList')),
    WhatDo = lazy(() => import('components/WhatDo')),
    StupidForm = lazy(() => import('components/StupidForm'));

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

                            <Route exact path='/counter'>
                                <Suspense fallback={<div>Loading</div>}>
                                    <Counter />
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