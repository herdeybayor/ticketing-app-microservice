import { CustomError } from "./custom-error.js";
import { ErrorCode } from "./custom-error.js";

export class NotFoundError extends CustomError {
  statusCode = ErrorCode.NOT_FOUND;

  constructor(message?: string) {
    super(message || "Route not found");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}