
const express = require('express');
const app = express();

app.get('/',(request,response) => {response.send('<h1>This is Root Folder <h1')})

app.get('/api/notes',(request,response) => {response.json(notes)})

const PORT= 3060;
app.listen(PORT, ()=> {console.log(`Server initiated${PORT}`)})

const notes = [
{
id : 1,
Fname: 'Sriram',
imp : true,
}]