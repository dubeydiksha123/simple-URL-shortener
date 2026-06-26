const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema({
    full: { type: String, required: true },
    short: { type: String, required: true, default: require('shortid').generate }
});
module.exports = mongoose.model('Url', urlSchema);