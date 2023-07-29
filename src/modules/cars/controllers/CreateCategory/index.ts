import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryService } from "../../services/createCategoryService";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = new CategoriesRepository();
const categoryService = new CreateCategoryService(categoriesRepository);
const categoryController = new CreateCategoryController(categoryService);

export { categoryController };
