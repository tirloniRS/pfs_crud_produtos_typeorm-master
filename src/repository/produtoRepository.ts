import AppDataSource, {  } from "../data-source";
import { Produto } from "../entity/produto";

export const produtoRepository = AppDataSource.getRepository(Produto)