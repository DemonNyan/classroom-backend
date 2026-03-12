import express from "express";

const app = express();
const Port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(Port, () => {
  console.log(`Server is running on port http://localhost:${Port}`);
});
