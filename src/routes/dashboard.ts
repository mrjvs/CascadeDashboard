import express from 'express';
import path from 'path';

const dashboardRouter: express.Router = express.Router();

const dashboardRoot: string = path.join(__dirname, '../../client/dist');

// serve static dashboard files
dashboardRouter.use(express.static(dashboardRoot));

// all unknown routes go to index.html for vue.js to handle
dashboardRouter.use((req: express.Request, res: express.Response,
    next: express.NextFunction): void => {
    return res.sendFile('index.html', {
        root: dashboardRoot,
    });
});

export default dashboardRouter;
