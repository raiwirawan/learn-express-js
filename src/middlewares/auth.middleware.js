const authMiddleware = (req, res, next) => {
	if (req.headers.authorization) {
		const token = req.headers.authorization.split(" ")[1];
		if (token === "valid-token") {
			next();
		} else {
			res.status(401).send("Invalid token");
		}
	} else {
		res.status(401).send("No authorization header found");
	}
};

export default authMiddleware;
