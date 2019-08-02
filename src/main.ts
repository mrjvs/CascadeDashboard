import express from "express";
import passport from "passport";
import session from "express-session";

// local imports
import dashboardRouter from "./routes/dashboard";
import apiRouter from "./routes/api";

// configuration
import { sessionSecret, port } from "./config.json";
import passportConfig from "./passport.config";

// setup passport discord auth
passportConfig();

// setup express
const app: express.Application = express();
app.use(express.json());
app.use(session({
    secret: sessionSecret,
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 3600000
    },
}));
app.use(passport.initialize());
app.use(passport.session());

// routers
app.use(apiRouter);
app.use(dashboardRouter);

app.listen(port, () => {
    console.log(`Running Cascade Dashboard on port ${port}`);
});
