import { ErrorCode, CustomError } from "./custom-error.js";

export class DatabaseConnectionError extends CustomError {
  statusCode = ErrorCode.INTERNAL_SERVER_ERROR;

  reason = "Error connecting to database";
  constructor() {
    super("Error connecting to database");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
