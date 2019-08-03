import { Router, Response, Request, NextFunction } from 'express';
import passport from 'passport';

// local imports
import loggedIn from '../middleware/auth';
import { getSignature, isSignatureValid } from '../utils/signature';

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

apiRouter.get('/gettoken', loggedIn, (req: Request, res: Response): void => {
    res.json(getSignature(req.user.id));
});

apiRouter.post('/istokenvalid', ( req: Request, res: Response): Response => {
    const { signature, creation, userID } = req.body;
    return res.json({
        valid: isSignatureValid(signature, parseInt(creation, undefined), userID),
    });
});

apiRouter.use((req: Request, res: Response) => {
    res.status(404).json({
        code: 404,
        error: 'Endpoint not found',
    });
});

apiRouter.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        code: 500,
        error: 'Internal server error',
    });
});

export default apiRouter;
