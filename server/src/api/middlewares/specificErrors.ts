import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../../helper/ErrorHandler";


function specificErrorsThreatment(err: ErrorHandler,req: Request, res: Response, next: NextFunction) {
  const {message, code} = err

  if (message && code) {
    res.status(code).json({error: message});
    return;
  }

  next(err);
}

export default specificErrorsThreatment;
