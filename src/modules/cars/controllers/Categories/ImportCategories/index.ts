import { CategoriesRepository } from "../../../repositories/CategoriesRepository";
import { ImportCategoriesService } from "../../../services/Categories/ImportCategoriesService";
import { ImportCategoriesController } from "./ImportCategoriesController";

const categoriesRepository = null;
const importCategoriesService = new ImportCategoriesService(
  categoriesRepository,
);
const importCategoriesController = new ImportCategoriesController(
  importCategoriesService,
);

export { importCategoriesController };
