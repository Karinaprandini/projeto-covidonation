import { Router } from 'express';

const statementRouter = Router();

statementRouter.get('/', (request, response) => {
  return response.json({ message: 'Statement' });
});

export default statementRouter;
