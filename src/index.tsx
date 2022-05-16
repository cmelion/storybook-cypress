import React from 'react';
import axios from 'axios';
// @ts-ignore
import { createRoot } from 'react-dom/client';
// @ts-ignore
import { RequestProvider } from 'react-request-hook';
import { Provider } from 'react-redux';
import { store } from './state/store';

import './index.scss';
import App from './App';

const axiosInstance = axios.create({
    baseURL: "/"
});

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RequestProvider value={axiosInstance}>
                <App/>
            </RequestProvider>
        </Provider>
    </React.StrictMode>
);

