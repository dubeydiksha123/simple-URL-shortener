const express = require('express');
const mongoose = require('mongoose');
const Url = require('./models/Url');
const app = express();

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/urlShortener')
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch(err => console.log('MongoDB Connection Error:', err));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// Home route
app.get('/', async (req, res) => {
    const urls = await Url.find();
    res.render('index', { urls: urls });
});

// Create short URL route
app.post('/shortUrls', async (req, res) => {
    if (!req.body.fullUrl) return res.redirect('/');
    await Url.create({ full: req.body.fullUrl });
    res.redirect('/');
});

// Redirect route
app.get('/:shortUrl', async (req, res) => {
    const url = await Url.findOne({ short: req.params.shortUrl });
    if (url == null) return res.sendStatus(404);
    res.redirect(url.full);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});