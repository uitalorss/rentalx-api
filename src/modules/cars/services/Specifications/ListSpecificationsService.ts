import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/interfaces/ISpecificationsRepository";

class ListSpecificationsService {
  // eslint-disable-next-line prettier/prettier
  constructor(private repository: ISpecificationRepository) { }

  execute(): Specification[] {
    return this.repository.list();
  }
}

export { ListSpecificationsService };
