import { app } from "./app.js";

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is Running, Hit your APIs");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
