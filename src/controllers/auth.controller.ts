import { Request, Response } from "express";

export const login = (req : Request, res : Response) => {
	try {
		res.json({
			message: "Login successful",
		});
	} catch (e) {
		return res.status(500).json({message: "Something went wrong"});
	}
};
