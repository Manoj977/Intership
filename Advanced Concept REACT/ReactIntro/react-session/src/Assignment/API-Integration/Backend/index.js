const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const Model = require("./models");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

async function bootstrap() {
  await db("", "", "raj");

  app.get("/", function (req, res) {
    res.send("welcome to the microservice");
  });

  app.get("/categories", async (req, res) => {
    const categoryModel = new Model("category");
    let data = await categoryModel.find();
    res.send(data);
  });

  app.post("/addnewcategory", async (req, res) => {
    const categoryModel = new Model("category");
    let payload = {
      category_name: req.body.category_name,
      category_desc: req.body.category_desc,
      N: "CAT_" + new Date().getTime(),
    };
    let data = await categoryModel.insert(payload);
    res.send(data);
  });
  //update Category
  app.put("/categories/:category_id", async (req, res) => {
    const categoryModel = new Model("category");

    let payload = {
      category_name: req.body.category_name,
      category_desc: req.body.category_desc,
    };
    let data = await categoryModel.update(
      { category_id: req.params.category_id },
      payload
    );
    res.send(data);
  });
  // Delete a Category
  app.delete("/categories/:category_id", async (req, res) => {
    const categoryModel = new Model("category");
    const productModel = new Model("products");
    let data = await categoryModel.remove({
      category_id: req.params.category_id,
    });
    await productModel.remove({ category_id: req.params.category_id });
    res.send(data);
  });
  //fetchproducts from category id  example: phone => list of phones
  app.get("/products/:category_id", async (req, res) => {
    const productModel = new Model("products");
    let filter = {};
    if (req.params.category_id) {
      filter.category_id = req.params.category_id;
      console.log(filter.category_id)
    }
    let data = await productModel.find(filter);
    console.log("Data: "+data)
    res.send(data);
  });
  //List of Products Shown
  app.get("/products", async (req, res) => {
    const productModel = new Model("products");
    let filter = {};
    let data = await productModel.find(filter);
    res.send(data);
  });
  // Add a new Product
  app.post("/addnewproduct", async (req, res) => {
    const productModel = new Model("products");
    let data = await productModel.insert({
      product_name: req.body.product_name,
      product_desc: req.body.product_desc,
      product_id: "PRODUCT_" + new Date().getTime(),
      product_image: req.body.product_image,
      product_price: req.body.product_price,
      category_id: req.body.category_id,
    });
    res.send(data);
  });
  // update a products
  app.put("/products/:product_id", async (req, res) => {
    const productModel = new Model("products");
    const newData = {
      product_name: req.body.product_name,
      product_desc: req.body.product_desc,
      product_image: req.body.product_image,
      product_price: req.body.product_price,
      category_id: req.body.category_id,
    };
    let data = await productModel.update(
      { product_id: req.params.product_id },
      newData
    );
    res.send(data);
  });
  // Delete a product
  app.delete("/products/:product_id", async (req, res) => {
    const productModel = new Model("products");
    let data = await productModel.remove({ product_id: req.params.product_id });
    res.send(data);
  });

  app.listen(3001);
}

bootstrap();
