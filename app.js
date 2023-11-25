import express from "express";
import routes from "./app/routes/routes.js";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";

const app = express();
const port = process.env.PORT || 4000;
const host = process.env.HOST || "https://api.smart-recycling.my.id/api-docs/";

const corsOptions = {
  origin: "*",
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"],
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Smart Recycling Express API with Swagger",
      version: "1.0.0",
      description: "This is a Smart Recycling CRUD API made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://github.com/rizkyhaksono/smartrecycling-be/blob/main/LICENSE",
      },
      contact: {
        name: "rizkyhaksono",
        url: "https://github.com/rizkyhaksono/smartrecycling-be",
        email: "mrizkyhaksono@gmail.com",
      },
    },
    servers: [
      {
        url: `https://api.smart-recycling.my.id/api-docs/`,
        description: "prod",
      },
      {
        url: `http://localhost:3000/api-docs/`,
        description: "dev",
      },
    ],
  },
  apis: ["./routes/.js"],
};

const specs = swaggerJSDoc(options);

app.get("/", function (req, res) {
  res.send(`<h2 style="display: flex; justify-content: center; align-items: center;"><a href='https://api.smart-recycling.my.id/api-docs/'>Go to Swagger UI </a></h2>`);
});
app.use("/api", routes);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(specs));

app.listen(port, () => {
  console.log(`Server is running on port ${port} http://${host}:${port}`);
});
