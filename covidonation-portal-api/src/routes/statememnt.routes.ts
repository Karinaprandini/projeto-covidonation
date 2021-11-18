import { Router, Request } from 'express';
import { getRepository } from 'typeorm';
import Statement from '../models/Statement';

const statementRouter = Router();

statementRouter.get('/', (request, response) => {
  const statementRepository = getRepository(Statement);
  statementRepository.find().then((statements) => {
    response.json(statements);
  });
});

statementRouter.post('/', (request, response) => {
  const { description, value, type, user_id } = request.body;

  const statement = new Statement();
  statement.description = description;
  statement.value = value;
  statement.type = type;
  statement.user.id = user_id;

  const statementRepository = getRepository(Statement);
  statementRepository
    .save(statement)
    .then(() => {
      return response.status(200).json(statement);
    })
    .catch((err) => {
      return response.status(400).json({ error: err.message });
    });
});

statementRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const { description, value, type, user_id } = request.body;

  const statementRepository = getRepository(Statement);
  statementRepository
    .findOne(id)
    .then((statement) => {
      statement!.description = description;
      statement!.value = value;
      statement!.type = type;
      statement!.user.id = user_id;

      statementRepository
        .save(statement!)
        .then(() => {
          return response.status(200).json(statement);
        })
        .catch((err) => {
          return response.status(400).json({ error: err.message });
        });
    })
    .catch((err) => {
      return response.status(400).json({ error: err.message });
    });
});

statementRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  const statementRepository = getRepository(Statement);
  statementRepository.findOne(id).then((statement) => {
    statementRepository.remove(statement!).then(() => {
      return response.status(200).json(statement);
    });
  });
});

export default statementRouter;
