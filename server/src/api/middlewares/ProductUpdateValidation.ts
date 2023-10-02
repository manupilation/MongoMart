import { NextFunction, Request, Response } from "express";
import groupToNotBeUndefined from "../../helper/validators/groupNotToBeUndefined";
import typeofVerifier from "../../helper/validators/typeofVerifier";

function productUpdateValidation(req: Request, _res: Response, next: NextFunction) {
  const { id, body } = req.body;
  const {name, price, image, discountRate} = body;

  const group = [name, price, image];

  try {
    groupToNotBeUndefined(group);

    typeofVerifier({id}, "string");

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

export default productUpdateValidation;
