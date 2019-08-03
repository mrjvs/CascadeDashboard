import express from 'express';
import passport from 'passport';
import session from 'express-session';
import mongoose from 'mongoose';
import connectMongo from 'connect-mongo';
const mongoStore = connectMongo(session);

// local imports
import dashboardRouter from './routes/dashboard';
import apiRouter from './routes/api';

// configuration
const { sessionSecret, port, connectionString } = require('./config.json');
import passportConfig from './passport.config';

// setup passport discord auth
passportConfig();

// setup mongodb for session storage
mongoose.connect(connectionString, {
    useMongoClient: true,
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;

// setup express
const app: express.Application = express();
app.use(express.json());
app.use(session({
    secret: sessionSecret,
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 3600000,
    },
    store: new mongoStore({ mongooseConnection: db }),
}));
app.use(passport.initialize());
app.use(passport.session());

// routers
app.use('/api', apiRouter);
app.use(dashboardRouter);

app.listen(port, () => {
    console.log(`Running Cascade Dashboard on port ${port}`);
});
