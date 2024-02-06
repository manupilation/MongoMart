import { NextFunction, Request, Response } from "express";
import HttpStatus from "../../enum/HTTPStatus";
import resolver from "../../helper/Resolver";
import RegisterProduct from "../model/RegisterProduct";
import { AcquiredProduct } from "../../types/Product";


class AcquiredProductController {
  private acquiredProductModel: RegisterProduct; 
  constructor() {
    this.acquiredProductModel = new RegisterProduct();
  }

  registerProducts = resolver(async (req: Request<{body: AcquiredProduct}>, res: Response, _: NextFunction): Promise<void> => {
    const { products, user } = req.body;
    
    const create = await this.acquiredProductModel.RegisterProductOnDb({user, products});

    res.status(HttpStatus.Created).json({product: create});
  });

  getProduct = resolver(async (req: Request, res: Response, _: NextFunction): Promise<void> => {
    const { userId } = req.params;
    const product = await this.acquiredProductModel.GetRegisteredProductsOnDb(userId);

    res.status(HttpStatus.OK).json({ product });
  });
}

export default AcquiredProductController;
