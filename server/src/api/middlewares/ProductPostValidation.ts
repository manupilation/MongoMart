import { NextFunction, Request, Response } from "express";
import groupToNotBeUndefined from "../../helper/validators/groupNotToBeUndefined";
import typeofVerifier from "../../helper/validators/typeofVerifier";

function productPostValidation(req: Request, res: Response, next: NextFunction) {
  const {body: {name, price, image, discountRate}} = req;

  const group = [name, price, image];

  try {
    groupToNotBeUndefined(group);

    typeofVerifier({name}, "string");
  
    typeofVerifier({price}, "number");

    typeofVerifier({image}, "string");

    if (!!discountRate) {
      typeofVerifier({discountRate}, "number")
    }

  } catch(err) {
    next(err);
  }

  next();
}

export default productPostValidation;
