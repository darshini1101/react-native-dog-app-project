//Import react Library and view
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../../reducers';
import Root from '../Root';
import rootSaga from '../../sagas/sagas';

 //Create the saga middleware and pass root saga
 const sagaMiddleware = createSagaMiddleware();

 //Create store 
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

//then run the saga
sagaMiddleware.run(rootSaga);

//Functional Components 
//Wrap the view with the Provider
//Pass the provide a store
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

export default App;
