const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Set up the Express app
const app = express();
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',    
    password: 'pass123',  
    database: 'telecom_db'
});

db.connect(err => {
    if (err) {
        console.log('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});


// 1. Activate SIM Card
app.post('/activate', (req, res) => {
    const { sim_number } = req.body;
    
    const query = 'SELECT * FROM sim_cards WHERE sim_number = ?';
    db.query(query, [sim_number], (err, results) => {
        if (err) throw err;
        
        if (results.length > 0) {
            const updateQuery = 'UPDATE sim_cards SET status = "active", activation_date = NOW() WHERE sim_number = ?';
            db.query(updateQuery, [sim_number], (err, result) => {
                if (err) throw err;
                res.json({ message: 'SIM activated successfully' });
            });
        } else {
            res.status(404).json({ error: 'SIM card not found' });
        }
    });
});

// 2. Deactivate SIM Card
app.post('/deactivate', (req, res) => {
    const { sim_number } = req.body;
    
    const query = 'SELECT * FROM sim_cards WHERE sim_number = ?';
    db.query(query, [sim_number], (err, results) => {
        if (err) throw err;
        
        if (results.length > 0) {
            const updateQuery = 'UPDATE sim_cards SET status = "inactive" WHERE sim_number = ?';
            db.query(updateQuery, [sim_number], (err, result) => {
                if (err) throw err;
                res.json({ message: 'SIM deactivated successfully' });
            });
        } else {
            res.status(404).json({ error: 'SIM card not found' });
        }
    });
});

// 3. Get SIM Details
app.get('/sim-details/:sim_number', (req, res) => {
    const sim_number = req.params.sim_number;

    const query = 'SELECT * FROM sim_cards WHERE sim_number = ?';
    db.query(query, [sim_number], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ error: 'SIM card not found' });
        }
    });
});

// Error handling for invalid routes
app.use((req, res, next) => {
    res.status(404).json({ error: 'Invalid route or method' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});