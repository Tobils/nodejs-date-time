const express = require('express');
const app = express();
const root = require('./routes/root');
const rootDir = require('./util/path');
const path = require('path');

app.set(express.static(path.join(rootDir,'public')));
app.use(root);
app.listen(3000);