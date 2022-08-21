import { z } from "zod";

export const NewProductSchema = z.object({
	body: z.object({
		name: z.string().min(1),
		price: z.number().min(1),
	}),
});

export const UpdateProductSchema = z.object({
	body: z.object({
		name: z.string().optional(),
		price: z.number().nonnegative().optional(),
	}),
	params: z.object({
		id: z.string().min(1),
	})
});

export type NewProductType = z.infer<typeof NewProductSchema>['body'];
export type updateProductBodyType = z.infer<typeof UpdateProductSchema>['body'];
export type updateProductParamsType = z.infer<typeof UpdateProductSchema>['params'];
