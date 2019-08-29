const express = require('express');
const app = express();
const root = require('./routes/root');
const rootDir = require('./util/path');
const path = require('path');

app.use(express.static(path.join(__dirname,'public'))); // untuk routing style css pada directory public

app.set('view engine', 'pug'); // compile dynamic engine using pug who store in directory views
app.set('views', 'views'); // directory untuk views pada directory views

app.set(express.static(path.join(rootDir,'public')));
app.use(root);
app.listen(3000);