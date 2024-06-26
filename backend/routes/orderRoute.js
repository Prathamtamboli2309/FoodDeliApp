import express from "express";
import authMiddlewear from "../middleware/auth.js";
import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";

const orderRoute = express.Router();

orderRoute.post("/place", authMiddlewear, placeOrder);
orderRoute.post("/verify", verifyOrder);
orderRoute.post("/userorders", authMiddlewear, userOrders);
orderRoute.get("/list", listOrders);
orderRoute.post("/status", updateStatus);
export default orderRoute;
