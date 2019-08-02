import { Response, Request, NextFunction } from "express";

export default function loggedIn(req: Request, res: Response, next: NextFunction): void {
    if (req.user) {
        next();
    } else {
        res.status(403).json({
            code: 403,
            error: "not authenticated",
        });
    }
}
