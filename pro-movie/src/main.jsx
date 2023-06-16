import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//redux set up
import { legacy_createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducer/index.js';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const composeEnchancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer,
  composeEnchancer(applyMiddleware(thunk))
  )
//router Dom
import {BrowserRouter} from 'react-router-dom'  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
