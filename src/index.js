import React from 'react'; //ok
import ReactDOM from 'react-dom/client'; //ok 
import './index.css'; //ok
import App from './App'; //ok 
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

