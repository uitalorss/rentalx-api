import { Specification } from "../model/Specification";
import {
  ICreateSpecification,
  ISpecificationRepository,
} from "./interfaces/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];
  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: SpecificationsRepository;
  constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name,
    );
    return specification;
  }
  list(): Specification[] {
    return this.specifications;
  }
  create({ name, description }: ICreateSpecification): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
  }
}

export { SpecificationsRepository };
