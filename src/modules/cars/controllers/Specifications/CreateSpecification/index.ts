import { SpecificationsRepository } from "../../../repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../../../services/Specifications/CreateSpecificationService";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationRepository = SpecificationsRepository.getInstance();
const specificationService = new CreateSpecificationService(
  specificationRepository,
);
const specificationController = new CreateSpecificationController(
  specificationService,
);

export { specificationController };
