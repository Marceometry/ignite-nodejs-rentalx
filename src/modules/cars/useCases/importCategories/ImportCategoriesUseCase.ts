import csvParse from "csv-parse";
import fs from "fs";
import { ICategoriesRepository } from "@/modules/cars";

interface IImportCategories {
  name: string;
  description: string;
}

export class ImportCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategoriesByFile(
    file: Express.Multer.File
  ): Promise<IImportCategories[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategories[] = [];

      const parseFile = csvParse();
      const stream = fs.createReadStream(file.path);

      stream.pipe(parseFile);
      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
          throw new Error("erro inesperado");
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => reject(err));
    });
  }

  async execute(file: Express.Multer.File) {
    const categories = await this.loadCategoriesByFile(file);

    return categories
      .map((category) => {
        const { name, description } = category;

        const alreadyExists = this.categoriesRepository.findByName(name);
        if (alreadyExists) return null;

        return this.categoriesRepository.create({ name, description });
      })
      .filter((c) => c);
  }
}
