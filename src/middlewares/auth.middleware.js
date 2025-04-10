import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers.authorization?.split(" ")[1];
		if (!token) {
			return res.status(401).json({ message: "No token provided" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const user = await User.findById(decoded.id).select("-password");

		if (!user) {
			return res.status(401).json({ message: "Invalid token" });
		}

		req.user = user;
		next();
	} catch (error) {
		res.status(401).json({ message: "Unauthorized" });
	}
};

const authMiddleware = verifyToken;

export default authMiddleware;
