const {
  ERROR_NAMES,
  ERROR_MESSAGES,
  ERROR_CODES,
  ERROR_DISPLAY_CODES,
  DEFAULT_ERROR_CODE,
  DEFAULT_ERROR_DISPLAY_CODE,
  DEFAULT_ERROR_MESSAGE
} = require('../constants/aws-errors');

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Expose-Headers': 'Authorization, x-amzn-remapped-authorization',
  'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN,
  'Access-Control-Allow-Credentials': true
};

const buildResponse = (code, status, data, headers) => ({
  statusCode: code,
  body: JSON.stringify({
    status,
    data
  }),
  headers: {
    ...DEFAULT_HEADERS,
    ...headers
  }
});

const handleError = (error, headers) => {
  console.log('[ERROR] Original Error:', error);

  const name = ERROR_NAMES[error.code];
  const statusCode = ERROR_CODES[name] || DEFAULT_ERROR_CODE;
  const displayCode = ERROR_DISPLAY_CODES[name] || DEFAULT_ERROR_DISPLAY_CODE;
  const message = ERROR_MESSAGES[name] || DEFAULT_ERROR_MESSAGE;

  console.log('[ERROR] Response:', statusCode, displayCode, message);

  const responseData = {
    error: {
      name: displayCode,
      message
    }
  };

  return buildResponse(statusCode, status, responseData, headers);
};

const handleSuccess = (body, headers) => {
  const statusCode = 200;
  const status = 'Success';
  const responseData = body || {};

  console.log('[SUCCESS] Response:', statusCode, responseData);

  return buildResponse(statusCode, status, responseData, headers);
};

module.exports = { handleError, handleSuccess };
