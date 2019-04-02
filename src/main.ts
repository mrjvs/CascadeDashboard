import express from "express";

// local imports
import dashboardRouter from "./routes/dashboard";

// express setup
const app: express.Application = express();
app.use(dashboardRouter);

const port : number = Number(process.env.PORT) || 8080;

app.listen(port);
console.log(`Running on port ${port}`);
