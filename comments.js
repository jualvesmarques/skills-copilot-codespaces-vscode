// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
    {
        id: 1,
        name: 'John',
        comment: 'Hello'
    },
    {
        id: 2,
        name: 'Jane',
        comment: 'Hi'
    }
];

// Create get request for comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create get request for comments by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});