class ErrorHandler extends Error {
  code: number;
  message: string;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

export default ErrorHandler;
