import express from "express";
import connectDB from "./configs/db.config.js";
import dotenv from "dotenv";

dotenv.config();
console.log("Environment variables:", {
	MONGO_URI: process.env.MONGO_URI ? "set" : "not set",
	JWT_SECRET: process.env.JWT_SECRET ? "set" : "not set",
});
import userRoutes from "./routes/user.route.js";
import authMiddleware from "./middlewares/auth.middleware.js";

const app = express();

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/api/users", authMiddleware, userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

export default app;
