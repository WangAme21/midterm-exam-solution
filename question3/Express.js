const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my Express server!");
});

// Define the /test route
app.get("/test", (req, res) => {
    res.json({ message: "Express is working! John Aries C. Rizada" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
