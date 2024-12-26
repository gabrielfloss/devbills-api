import { CategoriesRepository } from "../database/repositories/categories.repository";
import { TransactionsRepository } from "../database/repositories/transactions.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { TransactionModel } from "../database/schemas/transactions.schema";
import { TransactionService } from "../services/transactionservice";


export class TransactionsFactory {
  private static transactionService: TransactionService ;

  static getServiceInstance() {
    if (this.transactionService) {
      return this.transactionService;
    }

    const repository = new TransactionsRepository(TransactionModel);
    const categoriesRepository =  new CategoriesRepository(CategoryModel)
    const service = new TransactionService(repository, categoriesRepository);

    this.transactionService = service;

    return service;
  }
}

