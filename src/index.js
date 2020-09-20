import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';
import Framework7React from 'framework7-react';
import ReduxThunk from 'redux-thunk';
//Reducers//
import currentUser from './store/reducers/userAuth';
import posts from './store/reducers/posts';
import users from './store/reducers/users';


const rootReducer = combineReducers({
  currentUser: currentUser,
  posts: posts,
  users: users

});


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
Framework7.use(Framework7React);

ReactDOM.render(
  <React.StrictMode> <Provider store={store}>

    <App />

  </Provider></React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
