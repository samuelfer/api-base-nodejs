import { Router } from 'express';
import userRouter from '@modules/users/routes/user.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Marha!' });
});
routes.use('/users', userRouter);

export default routes;
