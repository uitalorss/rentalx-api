import { CategoriesRepository } from "../../../repositories/CategoriesRepository";
import { CreateCategoryService } from "../../../services/Categories/CreateCategoryService";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();
const categoryService = new CreateCategoryService(categoriesRepository);
const categoryController = new CreateCategoryController(categoryService);

export { categoryController };
