import { NextFunction, Request, Response } from 'express';

import factorsService from '../services/factors.service';
import ClientError from '../errors/ClientError';

class FactorsController {
  async findFactors(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const number = Number(req.params.number);

      if (isNaN(number)) {
        throw new ClientError(
          'Invalid number',
          { number: req.params.number },
          401
        );
      }

      const factors = await factorsService.findFactors(number);

      res.json(factors);
    } catch (err) {
      next(err);
    }
  }
}

export default new FactorsController();
