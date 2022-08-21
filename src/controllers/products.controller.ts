import { Request, Response } from "express";
import { NewProductType, updateProductBodyType, updateProductParamsType } from "../schemas/products.schema";

export const newProduct = (req: Request<unknown, unknown, NewProductType>, res: Response) => {
	const {name, price} = req.body;

	return res.json({
		message: "New product created",
	});
}

export const updateProduct = (req: Request<updateProductParamsType, unknown, updateProductBodyType>, res: Response) => {
	const { id } = req.params;
	const { name, price } = req.body;

	return res.json({
		message: "Updated product",
	});
}
