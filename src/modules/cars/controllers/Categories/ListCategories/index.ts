import { CategoriesRepository } from "../../../repositories/CategoriesRepository";
import { ListCategoriesService } from "../../../services/Categories/ListCategoriesService";
import { ListCategoriesController } from "./ListCategoriesController";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesService = new ListCategoriesService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesService,
);

export { listCategoriesController };
