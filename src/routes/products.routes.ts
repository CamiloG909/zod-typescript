import { Router } from "express";
import { newProduct, updateProduct } from "../controllers/products.controller";
import { schemaValidation } from "../middlewares/schemaValidate";
import { NewProductSchema, UpdateProductSchema } from "../schemas/products.schema";

const router = Router();

router.post("/", schemaValidation(NewProductSchema), newProduct);

router.put("/:id", schemaValidation(UpdateProductSchema), updateProduct);

export default router;
