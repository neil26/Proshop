const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv");

const productRoutes = require("./api/index");
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
connectDB();
//Home Page
app.get("/", (req, res) => {
  res.send("API Running..!");
});
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server Running in  ${process.env.NODE_ENV} on port ${PORT}`.red.bold
  );
});
