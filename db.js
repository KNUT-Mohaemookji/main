require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true });

const db = mongoose.connection;

/**
 * DB events.
 * error, open, ...
 */
db.on('error', err => console.log('Error on connection:\n', err.message));
db.on('open', () => console.log('Connected to mongoose.'));

/**
 * DB test.
 * save()
 */
// const Video = require('./models/Tempvideo');

// const ok = new Video({ title: "Super", thumbnail: "Man", link: "Good" });
// ok.save();

module.exports = db;