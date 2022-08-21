import express from "express";
import authRoutes from "./routes/auth.routes";
import productsRoutes from "./routes/products.routes";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);

export default app;
