const express = require('express');
const session = require('express-session');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })

}
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on routes
app.use(routes);

//turn on connection to db and server

app.listen(PORT, () => {
    console.log('Now listening');
    sequelize.sync({ force: false })
});
