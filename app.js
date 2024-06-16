const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./Back-end/config/db'); // Adjust this path based on the actual location
const { protect } = require('./Back-end/middleware/authMiddleware'); // Import the protect middleware

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "css" and "js" directories
app.use('/css', express.static(path.join(__dirname, 'Front-end', 'css')));
app.use('/js', express.static(path.join(__dirname, 'Front-end', 'js')));

// Connect to MongoDB
connectDB();

// Define routes for HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Front-end', 'index.html'));
});

app.get('/dashboard', protect, (req, res) => { // Protect the dashboard route
    res.sendFile(path.join(__dirname, 'Front-end', 'dashboard.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'Front-end', 'login.html'));
});

app.get('/report-hazard', protect, (req, res) => { // Protect the report hazard route
    res.sendFile(path.join(__dirname, 'Front-end', 'report-hazard.html'));
});

app.get('/report-incident', protect, (req, res) => { // Protect the report incident route
    res.sendFile(path.join(__dirname, 'Front-end', 'report-incident.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'Front-end', 'signup.html'));
});

app.get('/view-incidents', protect, (req, res) => { // Protect the view incidents route
    res.sendFile(path.join(__dirname, 'Front-end', 'view-incidents.html'));
});

app.get('/view-hazards', protect, (req, res) => { // Protect the view hazards route
    res.sendFile(path.join(__dirname, 'Front-end', 'view-hazards.html'));
});

// Define API routes
const authRoutes = require('./Back-end/routes/auth');
const incidentsRoutes = require('./Back-end/routes/incident');
const hazardsRoutes = require('./Back-end/routes/hazard'); // Import the hazards routes

// Use API routes
app.use('/api/auth', authRoutes);
app.use('/api/incidents', incidentsRoutes);
app.use('/api/hazards', hazardsRoutes); // Use the hazards routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
