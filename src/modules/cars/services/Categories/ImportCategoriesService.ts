// eslint-disable-next-line import/no-extraneous-dependencies
import { parse } from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

interface IImportCategories {
  name: string;
  description: string;
}

class ImportCategoriesService {
  // eslint-disable-next-line prettier/prettier
  constructor(private categoriesRepository: ICategoriesRepository) { }

  loadCategories(file: Express.Multer.File): Promise<IImportCategories[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategories[] = [];

      const parseFile = parse();
      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map(async (item) => {
      if (!this.categoriesRepository.findByName(item.name)) {
        this.categoriesRepository.create(item);
      }
    });
  }
}

export { ImportCategoriesService };
