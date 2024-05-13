const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'homepage' });
});

app.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'User',
    users: users,
  });
});

app.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect('/users');
});

const port = 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
