const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Route handler
app.get("/", (req: { [key: string]: any }, res: { [key: string]: any }) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
