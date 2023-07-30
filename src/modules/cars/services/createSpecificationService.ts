import { ISpecificationRepository } from "../repositories/interfaces/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  // eslint-disable-next-line prettier/prettier
  constructor(private repository: ISpecificationRepository) { }
  execute({ name, description }: IRequest) {
    const specificationAlreadyExists = this.repository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error("Especificação já existe.");
    }
    return this.repository.create({ name, description });
  }
}

export { CreateSpecificationService };
