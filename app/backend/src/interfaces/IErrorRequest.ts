import { ErrorRequestHandler } from 'express';

interface Details {
  message: string,
  type: string,
}

interface IErrorRequestWithDetails extends ErrorRequestHandler {
  details?: Details[],
  message?: string,
}

export default IErrorRequestWithDetails;
