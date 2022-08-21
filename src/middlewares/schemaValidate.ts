import { Request, Response, NextFunction } from "express"
import { AnyZodObject, ZodError } from "zod"

export const schemaValidation = (schema: AnyZodObject) => (req : Request,res : Response, next : NextFunction) => {
	try {
		schema.parse({
			body: req.body,
			params: req.params,
			query: req.query,
		});
		next();
	} catch (e) {
		if (e instanceof ZodError) {
			return res.status(400).json(e.issues.map(issue => {return {message: issue.message}}));
		}

		return res.status(500).json({message: "Internal server error"});
	}
}
