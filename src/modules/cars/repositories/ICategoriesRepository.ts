import { Category } from "../entities/Category";

//DTO = Data Transfer object, transferir os objetos de uma classe pra outra.
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({name, description}: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO }