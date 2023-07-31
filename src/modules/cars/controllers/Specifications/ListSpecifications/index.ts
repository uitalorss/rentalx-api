import { SpecificationsRepository } from "../../../repositories/SpecificationsRepository";
import { ListSpecificationsService } from "../../../services/Specifications/ListSpecificationsService";
import { ListSpecificationController } from "./ListSpecificationController";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationsService = new ListSpecificationsService(
  specificationsRepository,
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationsService,
);

export { listSpecificationController };
