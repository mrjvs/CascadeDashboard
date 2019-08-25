import { Router, Response, Request, NextFunction } from 'express';
import passport from 'passport';

// local imports
import loggedIn from '../middleware/auth';
import { getToken, isTokenValid } from '../utils/token';

const apiRouter: Router = Router();

// redirect to auth link
apiRouter.get('/login', passport.authenticate('discord'));

// receives discord account info
apiRouter.get('/login/callback', passport.authenticate('discord', {
    failureRedirect: '/',
}),           (req: Request, res: Response): void => {
    res.redirect('/');
});

apiRouter.get('/me', loggedIn, (req: Request, res: Response): void => {
    res.json({
        userID: req.user.id,
    });
});

apiRouter.get('/getToken', loggedIn, (req: Request, res: Response): void => {
    res.json(getToken(req.user.id));
});

apiRouter.post('/istokenvalid', ( req: Request, res: Response): Response => {
    const { token } = req.body;
    return res.json({
        valid: isTokenValid(token),
    });
});

apiRouter.use((req: Request, res: Response) => {
    res.status(404).json({
        code: 404,
        error: 'Endpoint not found',
    });
});

apiRouter.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    res.status(500).json({
        code: 500,
        error: 'Internal server error',
    });
});

export default apiRouter;
