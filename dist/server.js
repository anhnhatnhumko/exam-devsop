"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
const PORT = process.env.PORT;
app_1.default.get("/", (req, res) => {
    res.send("Xin chào! Chúc mừng bạn đã làm được");
});
(0, db_1.connectDB)().then(() => app_1.default.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}/`)));
app_1.default.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
