const express = require('express');
const app = express.Router();

// TODOLIST ITEMS
app.post('/', (req, res) => {
    res.json({})
});

app.get('/', (req, res) => {
    res.json({})
});

app.get('/:id', (req, res) => {
    res.json({})
});

app.put('/:id', (req, res) => {
    res.json({})
});

app.delete('/:id', (req, res) => {
    res.json({})

});

module.exports = {
    todoApp: app,
};
