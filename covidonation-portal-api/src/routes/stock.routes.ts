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
  const { checkin_date, checkout_date, quantity, product, user } = request.body;

  const stock = new Stock();
  stock.checkin_date = checkin_date;
  stock.checkout_date = checkout_date;
  stock.product = product;
  stock.user = user;
  stock.quantity = quantity;

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
  const { checkin_date, checkout_date, quantity, product, user } = request.body;

  const stockRepository = getRepository(Stock);

  stockRepository.findOne(id).then((stock) => {
    stock!.checkin_date = checkin_date;
    stock!.checkout_date = checkout_date;
    stock!.quantity = quantity;
    stock!.product = product;
    stock!.user = user;

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
        return response.status(204).send();
      })
      .catch((err) => {
        return response.status(400).json({ error: err.message });
      });
  });
});

export default stockRouter;
