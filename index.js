const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { authenticate, isAuthenticated } = require('@id6/express');

const app = express();

app.use(cors({
  // 1. allow browsers to send the auth cookie
  credentials: true,
}));
// 2. make sure express parses cookies
app.use(cookieParser());
// 3. add the auth middleware
app.use(authenticate({
  url: 'http://localhost:3030',
  secret: 'changeMe',
}));

app.get('/hello', (req, res) => {
  const user = req.user; // set by id6
  res.json(user ? 'Authenticated' : 'Anonymous');
});
app.get('/secret', isAuthenticated, (req, res) => {
  res.json('to HODL');
});

app.listen(3001, () => console.log(`Listening on port 8000`));
