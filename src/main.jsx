import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { Provider } from 'react-redux';
import store from './store/index.js';
import DarkModeWrapper from './darkModeWrapper.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeWrapper>
        <App />
      </DarkModeWrapper>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
