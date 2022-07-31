import { CategoriesRepository } from "@/modules/cars";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoriesUseCase = new ImportCategoriesUseCase(
  categoriesRepository
);

export const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCase
);
