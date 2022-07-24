import { Category } from "@/modules/cars";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  list(): Category[];
  findByName(name: string): Category;
  create(data: ICreateCategoryDTO): Category;
}
