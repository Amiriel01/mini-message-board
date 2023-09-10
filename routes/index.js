const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'Mini Message App' });
});

router.post('/new', function (req, res, next) {
  const senderName = req.body.senderName;
  const senderMessage = req.body.senderMessage;
  messages.push({ text: senderMessage, user: senderName, added: new Date() });
  res.redirect('/')
})


module.exports = router;
