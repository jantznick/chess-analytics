import React from 'react';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import Routes from './app/routes';

import api from './server/routes/api';

const app = express();

app.use(express.static('public'));

app.use("/api", api);

app.get('*', (req,res) => {
    const context = {};
    res.send(`<!DOCTYPE html>
            <head>
                <title>Chess Analytics</title>
                <script src="/bundle.js" defer></script>
                <link href="/styles/style.css" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Lato:400" rel="stylesheet">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            </head>
            <body>
                <div id="root">${renderToString(
                    <StaticRouter location={req.url} context={context}>
                        <Routes />
                    </StaticRouter>)}
                </div>
            </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});