import { Router } from 'express';

const stockRouter = Router();

stockRouter.get('/', (request, response) => {
  return response.json({ message: 'Stock' });
});

export default stockRouter;
