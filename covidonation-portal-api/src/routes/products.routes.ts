import { Router } from 'express';

import { getRepository } from 'typeorm';
import Product from '../models/Product';
import User from '../models/User';

const productsRouter = Router();

productsRouter.get('/', (request, response) => {
  const productsRepository = getRepository(Product);

  productsRepository
    .find()
    .then((products) => {
      return response.json(products);
    })
    .catch((err) => {
      return response.status(400).json({ error: err.message });
    });
});

productsRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  const productsRepository = getRepository(Product);

  productsRepository
    .findOne(id)
    .then((product) => {
      return response.json(product);
    })
    .catch((err) => {
      return response.status(400).json({ error: err.message });
    });
});

productsRouter.post('/', (request, response) => {
  const { name, price, user } = request.body;
  const productsRepository = getRepository(Product);

  const userRepository = getRepository(User);

  const product = productsRepository.create({
    name,
    price,
    user,
  });

  productsRepository
    .save(product)
    .then((savedProduct) => {
      return response.json(savedProduct);
    })
    .catch((err) => {
      return response.status(400).json({ error: err.message });
    });
});

productsRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;

  const productsRepository = getRepository(Product);

  productsRepository.findOne(id).then((product) => {
    if (!product) {
      return response.status(400).json({ error: 'Product not found.' });
    }

    product.name = name;
    product.price = price;

    productsRepository
      .save(product)
      .then((updatedProduct) => {
        return response.json(updatedProduct);
      })
      .catch((err) => {
        return response.status(400).json({ error: err.message });
      });
  });
});

productsRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  const productsRepository = getRepository(Product);

  productsRepository.findOne(id).then((product) => {
    if (!product) {
      return response.status(400).json({ error: 'Product not found.' });
    }
    productsRepository
      .remove(product)
      .then(() => {
        return response.status(204).send();
      })
      .catch((err) => {
        return response.status(400).json({ error: err.message });
      });
  });
});

export default productsRouter;
