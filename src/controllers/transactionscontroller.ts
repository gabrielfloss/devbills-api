import { NextFunction, Request, Response } from "express";

import { StatusCodes } from "http-status-codes";
import { TransactionService } from "../services/transactionservice";
import { CreatedTransactionDTO } from "../dtos/transactions.dto";

export class TransactionsController {
  constructor(private transactionsService: TransactionService) {}

  create = async (
    req: Request<unknown, unknown, CreatedTransactionDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { title, amount, categoryId, date, type } = req.body;

      const result = await this.transactionsService.create({
        title,
        amount,
        categoryId,
        date,
        type,
      });

      return res.status(StatusCodes.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  };
}
