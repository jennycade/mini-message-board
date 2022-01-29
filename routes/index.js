var express = require('express');
var router = express.Router();

// sample messages
const messages = [
  {
    text: 'Hi there!',
    user: "Amando",
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini message board', messages: messages });
});

/* new message form */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New message' });
});

/* form submission */
router.post('/new', (req, res, next) => {
  // should verify these somehow
  const userName = req.body.user;
  const text = req.body.text;

  messages.push({
    text: text,
    user: userName,
    added: new Date(),
  });

  res.redirect('/');
});

module.exports = router;
