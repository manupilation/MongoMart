import { NextFunction, Request, Response } from "express"

const resolver = (handlerControllerFn) => {
  return (req: Request<any>, res: Response<any>, next: NextFunction) => {
    return Promise.resolve(handlerControllerFn(req, res, next))
      .catch(e => next(e))
  }
}

export default resolver;
