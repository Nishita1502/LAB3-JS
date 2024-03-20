// Importing required modules
const express = require('express');
const fs = require('fs');

// Creating an instance of Express
const app = express();

// Define route to display JSON contents
app.get('/data', (req, res) => {
    // Read the JSON file
    fs.readFile('./data/data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // Send raw JSON data
        res.send(data);
    });
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
