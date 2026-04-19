const express = require("express");
const path = require("path"); // 🔥 ВАЖНО

const app = express();

// статические файлы
app.use(express.static(__dirname));

// главная страница
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// запуск сервера
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});