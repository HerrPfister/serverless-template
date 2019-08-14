const ERROR_NAMES = Object.freeze({
  CodeMismatchException: "INVALID_CONFIRMATION_CODE",
  ExpiredCodeException: "EXPIRED_CONFIRMATION_CODE",
  InvalidPasswordException: "INVALID_PASSWORD",
  InvalidParameterException: "MISSING_REQUIRED_ATTRIBUTE",
  InvalidTokenException: "INVALID_TOKEN_EXCEPTION",
  MissingTokenException: "MISSING_TOKEN_EXCEPTION",
  NotAuthorizedException: "UNAUTHORIZED",
  UsernameExistsException: "USER_EXISTS",
  UserNotConfirmedException: "USER_NOT_CONFIRMED",
  UserNotFoundException: "USER_NOT_FOUND"
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_TOKEN_EXCEPTION: "The token you provided is invalid.",
  MISSING_TOKEN_EXCEPTION: "Missing required token.",
  INVALID_CONFIRMATION_CODE: "The confirmation code you provided is invalid.",
  EXPIRED_CONFIRMATION_CODE: "The confirmation code you provided is expired. Please request a new code.",
  INVALID_PASSWORD: "The username or password you have entered does not match our records, please try again.",
  MISSING_REQUIRED_ATTRIBUTE: "The information you provided is either invalid or missing. Please try again.",
  UNAUTHORIZED: "We're sorry, but you are not authorized to access this page.",
  USER_EXISTS: "An account exists with the given username. Please use a different username to continue.",
  USER_NOT_CONFIRMED: "You're account has not been confirmed. You can't continue until you have confirmed your account.",
  USER_NOT_FOUND: "The username you provided does not exist, please try again."
});

const ERROR_CODES = Object.freeze({
  INVALID_CONFIRMATION_CODE: 400,
  EXPIRED_CONFIRMATION_CODE: 400,
  MISSING_TOKEN_EXCEPTION: 401,
  INVALID_TOKEN_EXCEPTION: 400,
  INVALID_PASSWORD: 401,
  MISSING_REQUIRED_ATTRIBUTE: 400,
  UNAUTHORIZED: 401,
  USER_EXISTS: 409,
  USER_NOT_CONFIRMED: 401,
  USER_NOT_FOUND: 404
});

const ERROR_DISPLAY_CODES = Object.freeze({
  MISSING_TOKEN_EXCEPTION: "missingToken",
  INVALID_TOKEN_EXCEPTION: "invalidToken",
  INVALID_CONFIRMATION_CODE: "invalidConfirmationCode",
  EXPIRED_CONFIRMATION_CODE: "expiredConfirmationCode",
  INVALID_PASSWORD: "invalidCredentials",
  MISSING_REQUIRED_ATTRIBUTE: "badRequest",
  UNAUTHORIZED: "unauthorized",
  USER_EXISTS: "collision",
  USER_NOT_CONFIRMED: "unconfirmed",
  USER_NOT_FOUND: "notFound"
});

const DEFAULT_ERROR_DISPLAY_CODES = "serverError";
const DEFAULT_ERROR_MESSAGE = "An unexpected error occurred. Please try again later";
const DEFAULT_ERROR_CODE = 500;

module.exports = {
  ERROR_NAMES,
  ERROR_MESSAGES,
  ERROR_CODES,
  ERROR_DISPLAY_CODES,
  DEFAULT_ERROR_CODE,
  DEFAULT_ERROR_DISPLAY_CODES,
  DEFAULT_ERROR_MESSAGE
};
