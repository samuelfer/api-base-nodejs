class AppError {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly success: boolean;

  constructor(message: string, statusCode = 400) {
    this.success = false;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
