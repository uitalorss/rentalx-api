import { CategoriesRepository } from "../../../repositories/CategoriesRepository";
import { CreateCategoryService } from "../../../services/Categories/CreateCategoryService";
import { CreateCategoryController } from "./CreateCategoryController";

export default () => {
  const categoriesRepository = new CategoriesRepository();
  const categoryService = new CreateCategoryService(categoriesRepository);
  const categoryController = new CreateCategoryController(categoryService);
  return categoryController;
};
