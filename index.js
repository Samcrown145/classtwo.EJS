const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dns = require('dns');
require('dotenv').config();

const studentRoutes = require('./routes/student.model');
// app.use(cors());

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentdb';

// Use public DNS servers for name resolution in some restricted environments.
dns.setServers(['8.8.8.8', '8.8.4.4']);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(cors());

mongoose.connect(uri)
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log('DB Failed to connect', err);
    });

app.use(studentRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
