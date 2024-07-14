import Product from "../models/productModel.js";

// Add a product
export const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({ product, message: "Product is Added" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch featured products
export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ featured: true });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch products with price less than a certain value
export const getProductsByPrice = async (req, res) => {
  try {
    const products = await Product.find({ price: { $lt: req.params.price } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch products with rating higher than a certain value
export const getProductsByRating = async (req, res) => {
  try {
    const products = await Product.find({ rating: { $gt: req.params.rating } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
