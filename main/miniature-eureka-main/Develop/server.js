// this is a coment
const express = require('express');

const path = require('path');
const fs = require('fs');

const db = require('./db/db.json');

const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));





app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);





  app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    res.sendFile(path.join(__dirname,"db/db.json"))
   
    });
  
    app.post('/api/notes', (req, res) => {

    console.info(`${req.method} request received to add a notes`);
    const notes = JSON.parse(fs.readFileSync("./db/db.json"))
    const newNotes = req.body;
    newNotes.id = uuid();
    notes.push(newNotes);
    fs.writeFileSync( "./db/db.json", JSON.stringify(notes))
    res.json(notes);
    
  });
  app.delete('/api/notes/:id', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const deleteNotes = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
  })
  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);





