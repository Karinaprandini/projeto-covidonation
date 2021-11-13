import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', (request, response) => {
  return response.json({ message: 'Products' });
});

export default productsRouter;
