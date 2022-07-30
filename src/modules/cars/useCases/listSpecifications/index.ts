import { SpecificationsRepository } from "@/modules/cars";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationsRepository
);

export const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);
