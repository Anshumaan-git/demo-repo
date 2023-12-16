const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 4001;


app.get("/files/:fileName", (req, res)=>{
  const name = req.params.fileName;
  console.log(name);
  fs.readFile(`files/${name}`, (err, data)=>{
    res.send(data)
  })
})

app.listen(PORT, ()=>{
  console.log(`Server is UP! in port ${PORT}`);
})

