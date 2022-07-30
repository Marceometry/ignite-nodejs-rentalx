import { Specification } from "@/modules/cars";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "./ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private categories: Specification[];

  private static INSTANCE: ISpecificationsRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): ISpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, { name, description });

    this.categories.push(specification);

    return specification;
  }

  list(): Specification[] {
    return this.categories;
  }

  findByName(name: string): Specification {
    return this.categories.find((c) => c.name === name);
  }
}
