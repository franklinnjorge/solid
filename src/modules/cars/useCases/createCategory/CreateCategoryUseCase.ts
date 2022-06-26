import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
  name: string;
  description: string;
}

/**
 * [X] - Definir o tipo do retorno 
 * [X] - Alterar o retorno de erro 
 * [X] - Acessar o repositório
 */

class CreateCategoryUseCase{

  constructor(private categoriesRepository: ICategoriesRepository){}

  async execute({description, name}: IRequest): Promise<void>{
   
    const categoryAlreadyExist = await this.categoriesRepository.findByName(name)

    if(categoryAlreadyExist){
      throw new Error("Category already exist!")
    }
    
    this.categoriesRepository.create({name, description})
  
  }
}

export { CreateCategoryUseCase }