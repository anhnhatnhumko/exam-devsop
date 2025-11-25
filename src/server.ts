import dotenv from "dotenv";
import { connectDB } from "./config/db";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Xin chào! Chúc mừng bạn đã làm được");
});

connectDB().then(() =>
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}/`)
  )
);

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
