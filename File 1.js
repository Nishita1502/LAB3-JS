// Importing required modules
const express = require('express');

// Creating an instance of Express
const app = express();

// Define the route for the homepage to display group names
app.get('/', (req, res) => {
    const groupNames = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5', 'Group 6'];
    let htmlResponse = '<h1>Group Names</h1><ul>';
    groupNames.forEach(name => {
        htmlResponse += `<li>${name}</li>`;
    });
    htmlResponse += '</ul>';
    res.send(htmlResponse);
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
