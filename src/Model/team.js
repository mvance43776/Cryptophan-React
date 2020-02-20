const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    token: String,
    price: String,
    tokenHolders: String,
    date: String,
    time: String,
    Top3: String,
    Top5: String,
    Top10: String,
    Top25: String, 
    Top50: String,
    Top100: String,
    Top250: String,
    Top500: String,
});

mongoose.model('TokenSchema', TokenSchema);
