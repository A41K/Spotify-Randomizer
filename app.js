const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Example in-memory storage (you would use a real database in production)
let userSongCounts = {};

app.use(bodyParser.json());

// API to save or update rare song count for a user
app.post('/api/saveRareSongCount', (req, res) => {
    const { userId, rareSongCount } = req.body;

    if (!userId || rareSongCount === undefined) {
        return res.status(400).json({ message: 'User ID and rare song count are required' });
    }

    // Store or update the rare song count for the user
    userSongCounts[userId] = rareSongCount;
    
    // Respond with success
    res.status(200).json({ message: 'Rare song count saved successfully!' });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
