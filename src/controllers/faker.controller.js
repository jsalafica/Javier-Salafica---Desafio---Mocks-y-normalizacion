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

export const fakerController = { fakerData };
