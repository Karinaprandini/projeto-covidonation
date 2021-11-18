import { Router } from 'express';

import { getRepository } from 'typeorm';
import Stock from '../models/Stock';

const stockRouter = Router();

stockRouter.get('/', (request, response) => {
  const stockRepository = getRepository(Stock);
  stockRepository
    .find()
    .then((stocks) => {
      return response.json(stocks);
    })
    .catch((err) => {
      return response.status(400).json({ error: err.message });
    });
});

stockRouter.post('/', (request, response) => {
  const { checkin_date, checkout_date, quantity_id, product, user_id } =
    request.body;
  //Pegar o usuário pelo ID e o produto pelo ID

  const stock = new Stock();
  stock.checkin_date = checkin_date;
  stock.checkout_date = checkout_date;
  stock.product.id = product;
  stock.user.id = user_id;
  stock.quantity = quantity_id;

  const stockRepository = getRepository(Stock);
  stockRepository
    .save(stock)
    .then((stock) => {
      return response.json(stock);
    })
    .catch((err) => {
      return response.status(400).json({ error: err.message });
    });
});

stockRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const { checkin_date, checkout_date, quantity, product_id, user_id } =
    request.body;

  const stockRepository = getRepository(Stock);

  stockRepository.findOne(id).then((stock) => {
    stock!.checkin_date = checkin_date;
    stock!.checkout_date = checkout_date;
    stock!.quantity = quantity;
    stock!.product = product_id;
    stock!.user.id = user_id;

    stockRepository
      .save(stock!)
      .then((stock) => {
        return response.json(stock);
      })
      .catch((err) => {
        return response.status(400).json({ error: err.message });
      });
  });
});

stockRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  const stockRepository = getRepository(Stock);

  stockRepository.findOne(id).then((stock) => {
    stockRepository
      .remove(stock!)
      .then(() => {
        return response
          .status(204)
          .json({ message: 'Estoque removido com sucesso' });
      })
      .catch((err) => {
        return response.status(400).json({ error: err.message });
      });
  });
});

export default stockRouter;
