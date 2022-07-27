const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({message:'ola mundo.'})
})

app.listen(4001, () => {
    console.log('Api na porta 4001')
})