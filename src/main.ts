import express from "express";

// configuration
import { port } from "./config.json";

// local imports
import dashboardRouter from "./routes/dashboard";

// express setup
const app: express.Application = express();
app.use(dashboardRouter);

app.listen(port);
console.log(`Running on port ${port}`);
