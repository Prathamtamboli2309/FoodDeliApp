import { Router } from "express";
import multer from "multer";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js"; // Correct import statement for named exports

const foodRouter = Router();

//image store
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

// Define your routes here
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
