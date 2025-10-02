// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define the port your server will listen on
const port = 4000;

// Serve static files from the current directory (this makes your HTML, JS, CSS, etc., accessible)
app.use(express.static(__dirname));

// Start the server and log a message to the console
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
