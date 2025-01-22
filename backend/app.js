const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});