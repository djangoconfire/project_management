import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore , applyMiddleware , compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import { reduxFirestore , getFirestore } from 'redux-firestore'
import { reactReduxFirebase , getFirebase } from 'react-redux-firebase'
// firebase config file 
import fbConfig from './config/fbConfig'

// apply middlewares
import thunk from 'redux-thunk'

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase , getFirestore })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    ))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
