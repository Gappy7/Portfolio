import React from 'react';
import ReactDOM from 'react-dom/client';
import { css, Global } from '@emotion/react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Global
            styles={css`
                body {
                    margin: 0;
                    font-family: Arial, sans-serif;
                }
            `}
        />
        <App />
    </>
);
