import type { ValidationError } from "express-validator";
import { ErrorCode, CustomError } from "./custom-error.js";

export class RequestValidationError extends CustomError {
  statusCode = ErrorCode.BAD_REQUEST;

  constructor(public errors: ValidationError[]) {
    super("Invalid request parameters");

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      if (err.type === "field") {
        return {
          message: err.msg,
          field: err.path,
        };
      }
      return {
        message: err.msg,
      };
    });
  }
}
