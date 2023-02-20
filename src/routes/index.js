import { Router } from "express";
import { faker } from "@faker-js/faker";
import { fakerController } from "../controllers/faker.controller.js";

const router = Router();

router.route("/").get((req, res) => {
  res.render("productForm", { titulo: "E-commerce" });
});

router.route("/api/productos-test").get((req, res) => {
  let products = fakerController.fakerData();
  res.render("fakeProds", { products, hasAny: true });
});

export default router;
