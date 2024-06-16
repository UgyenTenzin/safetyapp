const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connectionString = process.env.MONGODB_URI; // Ensure this matches the key in your .env file
        await mongoose.connect(connectionString);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;
