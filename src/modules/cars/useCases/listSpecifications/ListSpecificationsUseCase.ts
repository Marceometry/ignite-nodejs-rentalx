import { Specification, ISpecificationsRepository } from "@/modules/cars";

export class ListSpecificationsUseCase {
  constructor(private categoriesRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    return this.categoriesRepository.list();
  }
}
