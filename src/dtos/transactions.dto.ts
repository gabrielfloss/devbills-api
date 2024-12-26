import { z } from "zod"
import { TransactionType } from "../entities/transactions.entity";

export const createTransactionSchema = {
    title: z.string(),
    amount: z.number().int().positive(),
    type: z.nativeEnum(TransactionType),
    date: z.coerce.date(),
    categoryId: z.string(),
};

const createdTransactionObject = z.object(createTransactionSchema);
export type CreatedTransactionDTO = z.infer<typeof createdTransactionObject>;