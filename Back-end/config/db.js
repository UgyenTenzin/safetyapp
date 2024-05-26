// db.js
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connectionString = process.env.MONGODB_URI; // Get MongoDB URI from environment variables
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;
