const express = require('express');
const { route } = require('./notes');



// Import our modular routers for /note 
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);