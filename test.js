import express from "express";
import path from "path";

// Initialize app and port
const app = express();
const port = 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Route handler
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
