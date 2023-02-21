const note = require('express').Router();




note.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for note`);
  
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  // POST Route for a new UX/UI tip
  note.post('/api/notes', (req, res) => {
    // Let the client know that their POST request was received
    res.json(`${req.method} request received`);
  
    // Show the user agent information in the terminal
    console.info(req.rawHeaders);
  
    // Log our request to the terminal
    console.info(`${req.method} request received`);
  });
  
  module.exports = note;