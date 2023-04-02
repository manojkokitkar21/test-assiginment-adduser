const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const users = [
  { name: 'John Doe', email: 'john@example.com', age: 30, city: 'New York', profession: 'Developer' },
  { name: 'Jane Doe', email: 'jane@example.com', age: 25, city: 'Los Angeles', profession: 'Designer' },
  { name: 'Bob Smith', email: 'bob@example.com', age: 35, city: 'San Francisco', profession: 'Manager' },
];

app.get('/', (req, res) => {
  res.render('index', { users });
});

app.get('/user/add', (req, res) => {
  res.render('add-user');
});

app.post('/user/add', (req, res) => {
  const { name, email, age, city, profession } = req.body;
  const newUser = { name, email, age, city, profession };
  users.push(newUser);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
