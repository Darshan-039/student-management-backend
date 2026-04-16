const mongoose = require('mongoose');

// Connect to MongoDB
const connection = () => {
    mongoose.connect('mongodb+srv://yt:KCUTFdJRLFp0JU3D@yt-complete-backend.cqot0jc.mongodb.net/StudentDB-copy').then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('MongoDB connection error:', err);
    });

}

module.exports = { connection };
