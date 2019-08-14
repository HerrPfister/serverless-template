const dynamo = require('../clients/dynamo');

const { logFailure, logSuccess } = require('../utils/logger');
const { handleError, handleSuccess } = require('../utils/response');

const create = async (data) => {
  try {
    const result = await dynamo.create(data);

    logSuccess('DYNAMO', 'POST [RENAME DATA TYPE]', result);

    return handleSuccess(result);
  } catch (error) {
    logFailure('DYNAMO', 'POST [RENAME DATA TYPE]', error);

    return handleError(error);
  }
};

const get = async (worldId) => {
  try {
    const result = await dynamo.get(worldId);

    logSuccess('DYNAMO', 'QUERY [RENAME DATA TYPE]', result);

    return handleSuccess(result);
  } catch (error) {
    logFailure('DYNAMO', 'QUERY [RENAME DATA TYPE]', error);

    return handleError(error);
  }
};

const getAll = async (userId) => {
  try {
    const results = await dynamo.getAll(userId);

    logSuccess('DYNAMO', 'GET [RENAME DATA TYPE]', results);

    return handleSuccess(results);
  } catch (error) {
    logFailure('DYNAMO', 'GET [RENAME DATA TYPE]', error);

    return handleError(error);
  }
};

const remove = async (worldId) => {
  try {
    const result = await dynamo.remove(worldId);

    logSuccess('DYNAMO', 'DELETE [RENAME DATA TYPE]', result);

    return handleSuccess();
  } catch (error) {
    logFailure('DYNAMO', 'DELETE [RENAME DATA TYPE]', error);

    return handleError(error);
  }
};

const update = async (worldId, data) => {
  try {
    const result = await dynamo.update(worldId, data);

    logSuccess('DYNAMO', 'PUT [RENAME DATA TYPE]', result);

    return handleSuccess(result);
  } catch (error) {
    logFailure('DYNAMO', 'PUT [RENAME DATA TYPE]', error);

    return handleError(error);
  }
};

module.exports = {
  create,
  get,
  getAll,
  remove,
  update
};
