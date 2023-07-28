import { Specification } from "../model/Specification";

export interface ICreateSpecification {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  findByName(name: string): Specification;
  list(): Specification[];
  create({ name, description }: ICreateSpecification): void;
}
