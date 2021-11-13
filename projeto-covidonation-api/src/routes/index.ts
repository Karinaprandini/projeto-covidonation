import { Router } from 'express';

import productsRouter from './products.routes';
import usersRouter from './users.routes';
import statementRouter from './statememnt.routes';
import stockRouter from './stock.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/statement', statementRouter);
routes.use('/stock', stockRouter);

export default routes;
