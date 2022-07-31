import { Router } from "express";
import multer from "multer";
import {
  createCategoryController,
  importCategoriesController,
  listCategoriesController,
} from "@/modules/cars";

const upload = multer({ dest: "./temp" });

export const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  return importCategoriesController.handle(req, res);
});
