import express from "express";

const app = express();

app.get("/api/test", (req, res) => {
    res.send("Hello, this is a test endpoint!");
});

app.listen(9000, () => {
    console.log("Server is listening on port", 9000);
});

export default app;
