import { SpecificationsRepository } from "@/modules/cars";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);

export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
