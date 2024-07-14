import express from "express";
import { auth } from "../middlewares/auth.js";
import {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getProductsByPrice,
  getProductsByRating,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/", addProduct);
router.get("/", getProducts);
router.put("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);
router.get("/featured", getFeaturedProducts);
router.get("/price/:price", getProductsByPrice);
router.get("/rating/:rating", getProductsByRating);

export default router;
