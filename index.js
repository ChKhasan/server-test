import express from "express";
import path from "path";
import { requestTime } from "./middlewares.js";
import serverRoutes from "./routes/server.js";
const app = express();
app.use(requestTime);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "ejs"));
app.use(express.static(path.resolve(__dirname, "static")));
app.use(serverRoutes);
app.get("/", (req, res, next) => {
  res.render("index", { title: "Mainqul page", active: "main" });
});
app.get("/features", (req, res, next) => {
  res.render("features", { title: "Featuresqul page", active: "features" });
});
app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
