
// const notes = require('express').Router();
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
 const fs = require('fs');


module.exports = function (notes) { 

  //get request
notes.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for note`);
    let data = fs.readFileSync("/notes/data/db.json", "utf-8");

  
   res.json(JSON.parse (data));
  });

  notes.post('/api/notes', (req, res) => {
 const newNote = {
  ...req.body,
  id: uniqid(),
};
console.log("post request for new note");

let data = fs.readFileSync("/notes/data/db.json", "utf-8");

const dataJSON = JSON.parse(data)
data.JSON.push(newNote);
    fs.writeFile(
      "notes/data/db.jso",
      JSON.stringify(dataJSON),
      (err, text) => {
        if (err) {

          console.error(err)
          return;
        }
        cosole.log("hello ", text);

      }
    );
    console.log("success added, new note ");
    res.JSON(data);
  });
};

    
 