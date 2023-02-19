import { Router } from "express";
import { faker } from "@faker-js/faker";

const fakerData = () => {
  let products = [];
  for (let i = 0; i < 5; i++) {
    let title = faker.commerce.productName();
    let price = faker.commerce.price();
    let thumbnail = faker.image.image();
    products.push({ title, price, thumbnail });
  }
  return products;
};

const router = Router();

router.route("/").get((req, res) => {
  res.render("productForm", { titulo: "E-commerce" });
});

router.route("/api/productos-test").get((req, res) => {
  let products = fakerData();
  res.render("fakeProds", { products, hasAny: true });
});

export default router;
