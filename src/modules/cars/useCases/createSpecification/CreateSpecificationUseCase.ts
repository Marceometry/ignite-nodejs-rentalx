import { Specification, ISpecificationsRepository } from "@/modules/cars";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): Specification {
    const alreadyExists = this.specificationsRepository.findByName(name);
    if (alreadyExists) {
      throw new Error("Specification name already exists!");
    }

    return this.specificationsRepository.create({ name, description });
  }
}
