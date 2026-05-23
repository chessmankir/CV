import dotenv from "dotenv";
import express from "express"
import cors from "cors";
import commentRouter from "./modules/Comment/comment.router";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.json({ message: "CV backend is running" });
});
app.use("/api/ai/comment", commentRouter);

const PORT = process.env.PORT || 4005;

app.listen(PORT, () => {
    console.log(`CV project is working on ${PORT}`);
})