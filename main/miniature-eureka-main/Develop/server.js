const express = require('express');
const path = require('path');

const api = require('./routes/index.js');
const db = require('./db/db.json');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

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


  //-----------------------------------------------------------------------



app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for note`);
  
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  
  app.post('/api/notes', (req, res) => {
    // Let the client know that their POST request was received
    res.json(`${req.method} request received`);
  
    // Show the user agent information in the terminal
    console.info(req.rawHeaders);
  
    // Log our request to the terminal
    console.info(`${req.method} request received`);
  });
  //-----------------------------------------------------------------------

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);




//  this template need to be eddit  