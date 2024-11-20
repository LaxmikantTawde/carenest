const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Parent = mongoose.model('Parent');
const { jwtKey } = require('../config');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    // Check if Authorization header exists
    if (!authorization) {
        return res.status(401).json({ error: "You must be logged in" });
    }

    // Extract token from Authorization header (Bearer <token>)
    const token = authorization.split(' ')[1];  // Split to get the token part after 'Bearer'

    // Verify the token with the secret key
    jwt.verify(token, jwtKey, async (err, payload) => {
        if (err) {
            // Handle invalid or expired token
            return res.status(401).json({ error: "Invalid or expired token, you must log in again" });
        }

        const { userId } = payload;

        try {
            // Find the parent user using the userId from the payload
            const parentUser = await Parent.findById(userId);
            if (!parentUser) {
                // Return error if the user is not found
                return res.status(404).json({ error: "User not found" });
            }

            // Attach the user object to the request for further use (e.g., to access user data in routes)
            req.user = parentUser;

            // Proceed to the next middleware or route handler
            next();
        } catch (err) {
            // Handle unexpected errors in user retrieval
            console.error(err);
            return res.status(500).json({ error: "Error while fetching user data" });
        }
    });
};
