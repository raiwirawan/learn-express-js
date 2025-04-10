import express from "express";
import { Request, Response } from "express";
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Route handler

// Route handler
app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
