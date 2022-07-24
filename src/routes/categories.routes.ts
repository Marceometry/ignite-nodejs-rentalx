import { Router } from "express";
import { createCategoryController } from "@/modules/cars";

export const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  // const categoryList = categoriesRepository.list();

  return res.status(200).send([]);
});
