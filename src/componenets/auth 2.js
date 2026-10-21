const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Secret key for signing JWTs
const secretKey = 'your_secret_key';

// Sample user data (replace with database in a real application)
const users = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' }
];



// Middleware to verify JWT
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = decoded;
        next();
    });
};


// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

    res.json({ token });
});

app.post('/register', (req, res) => {
    const { username, email, password, confirmPassword } = req.body;


    for (let i = 0; i < users.length; i++) {
        if (user[i].email == email) {
            return res.status(401).json({ message: 'email allready exits' });
        }
        else {
            const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
            res.json({ message: "user sucessfully Created" });
        }

    }
    // Generate JWT


    res.json({});
})

// Protected route
app.get('/profile', verifyToken, (req, res) => {
    res.json({ user: req.user });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});