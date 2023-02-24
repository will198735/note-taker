
const express = require('express');
const path = require('path');
const db = require('./db/db.json');
// const notesRoute = require('./routes/index.js');
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));




// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);






app.get('/', (req, res) => {
  console.info(`${req.method} request received for note`);


  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);





