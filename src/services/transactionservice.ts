import { StatusCodes } from "http-status-codes";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { TransactionsRepository } from "../database/repositories/transactions.repository";
import { CreatedTransactionDTO } from "../dtos/transactions.dto";
import { Transaction } from "../entities/transactions.entity";
import { AppError } from "../erros/app.error";

export class TransactionService {
  constructor(
    private TransactionsRepository: TransactionsRepository,
    private categoriesRepository: CategoriesRepository,
  ) {}

  async create({
    title,
    type,
    date,
    categoryId,
    amount,
  }: CreatedTransactionDTO): Promise<Transaction> {
    const category = await this.categoriesRepository.findById(categoryId);

    if (!category) {
      throw new AppError("Category does not exist.", StatusCodes.NOT_FOUND);
    }

    const transaction = new Transaction({
      title,
      type,
      date,
      category,
      amount,
    });

    const createdTransaction = await this.TransactionsRepository.create(transaction);

    return createdTransaction;
  }
}
