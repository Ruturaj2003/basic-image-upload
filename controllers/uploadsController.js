const { StatusCodes } = require("http-status-codes");
const Product = require("../models/Product");

const uploadProductImage = async (req, res) => {
  res.send("Create Product");
};

const getAllProducts = async (req, res) => {
  res.send("List of  Product");
};

module.exports = {
  createProduct,
  getAllProducts,
};
