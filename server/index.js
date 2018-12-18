require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const session = require('express-session');
const {checkForSession} = require('./middlewares/checkForSession')
const { read } = require('./controllers/swag_controller')
const { login, register, signout, getUser } = require('./controllers/auth_controller')
const { add, deleteItem, checkout } = require('./controllers/cart_controller');
const app = express();

const { SESSION_SECRET } = process.env;

app.use(json());

app.use(
    session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    })
);

app.use(checkForSession);

app.get('/api/swag', read);
app.post('/api/login', login);
app.post('/api/register', register);
app.post('/api/signout', signout);
app.get('/api/user', getUser);
app.post('/api/cart', add);
app.post('/api/cart/checkout', checkout);
app.delete('/api/cart', deleteItem);

app.listen(3000, console.log(`Listening on 3000`))