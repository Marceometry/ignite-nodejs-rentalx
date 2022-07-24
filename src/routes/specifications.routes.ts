import { Router } from "express";
import {
  SpecificationsRepository,
  CreateSpecificationService,
} from "@/modules/cars";

export const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );
  const specification = createSpecificationService.execute({
    name,
    description,
  });

  return res.status(201).send({ specification });
});

specificationsRoutes.get("/", (req, res) => {
  const specificationList = specificationsRepository.list();

  return res.status(200).send(specificationList);
});
