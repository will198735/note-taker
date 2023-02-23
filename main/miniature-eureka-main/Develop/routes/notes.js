
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');


app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for note`);
  
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  
  app.post('/api/notes', (req, res) => {
    // Let the client know that their POST request was received
    res.json(`${req.method} request received`);
  
    
    
  
    // Log our request to the terminal
    console.info(`${req.method} request received`);

    const   {title, text} = req.body; 


    if (title && text) {
      const newNote = {
        title,
        text,
      };
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
   


    
  });
  module.exports = notes;