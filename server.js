import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./db/dbConnect.js";

import mailRoutes from "./routes/route.js";
import path from "path";

const __dirname = path.resolve();

const PORT = process.env.PORT || 8000;

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use("/", mailRoutes);

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

connectToDB();
app.listen(PORT, () => {
  console.log(`Server is listing on http://localhost"${PORT}`);
});
