import express from "express";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

app.use(express.json());

app.use("/books", bookRoutes);

app.listen(3000, () => {
    console.log("Listening to port 3000");
});