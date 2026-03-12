import express from "express";
import subjectsRouter from "./routes/subjects.js";
import cors from "cors";

const app = express();
const Port = 8000;

if (!process.env.FRONTEND_URL) {
  throw new Error("Frontend URL is not defined");
}

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use("/api/subjects", subjectsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(Port, () => {
  console.log(`Server is running on port http://localhost:${Port}`);
});
