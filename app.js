import express from "express";
import routes from "./app/routes/routes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;
const host = process.env.HOST || "localhost";

const corsOptions = {
  origin: "*",
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"],
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Go to /api");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port} http://${host}:${port}`);
});
