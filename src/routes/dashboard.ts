import { Router, Response, Request, NextFunction } from "express";
import express from "express";
import path from "path";

const dashboardRouter: Router = Router();

const dashboardRoot: string = path.join(__dirname, "../../client/dist");

// serve static dashboard files
dashboardRouter.use(express.static(dashboardRoot));

// all unknown routes go to index.html for vue.js to handle
dashboardRouter.use((req: Request, res: Response, next: NextFunction): void => {
    return res.sendFile("index.html", {
        root: dashboardRoot
    });
});

export default dashboardRouter;
