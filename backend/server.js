import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import templateRoute from "./routes/template.js";
import categoryRoute from "./routes/category.js";
import userRoute from "./routes/user.js";
import errorHandler from "./middleware/errorMiddleware.js"


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());;
app.use("/api/templates", templateRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/users", userRoute);
app.use(errorHandler)
mongoose.connect(process.env.MONGO_DB_URL).then(() => {
  app.get("/", (request, response) => {
    return response.status(200).send("Welcome to the API! API is connected");
  });

  app.listen(process.env.PORT, () => {
    return console.log(
      `API is connected & running on http://localhost:${process.env.PORT}`
    );
  });
});
