import { Router } from "express";
import { Category } from "../models";

export const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const category = new Category();

  Object.assign(category, { name, description });

  categories.push(category);

  res.status(201).send({ category });
});
