import { Category, ICategoriesRepository } from "@/modules/cars";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): Category {
    const alreadyExists = this.categoriesRepository.findByName(name);
    if (alreadyExists) {
      throw new Error("Category name already exists!");
    }

    return this.categoriesRepository.create({ name, description });
  }
}
