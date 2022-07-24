import { Specification } from "@/modules/cars";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  list(): Specification[];
  findByName(name: string): Specification;
  create(data: ICreateSpecificationDTO): Specification;
}
