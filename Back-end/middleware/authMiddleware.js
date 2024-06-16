const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];
            console.log('Received token:', token); // Add this line for debugging

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Decoded token:', decoded); // Add this line for debugging

            // Get user from the token
            req.user = await User.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            console.error('Error verifying token:', error);
            res.status(401).json({ message: 'Not authorized' });
        }
    } else {
        console.log('No token provided'); // Add this line for debugging
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

module.exports = { protect };
