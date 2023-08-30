import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  // eslint-disable-next-line prettier/prettier
  constructor(private repository: ICategoriesRepository) { }
  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.repository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Categoria já existe");
    }

    this.repository.create({ name, description });
  }
}
