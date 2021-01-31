const express = require("express")
//  console.log(express)

// Підключаємо shop routes
const hwRoutes = require("./routes/hwRoutes");

const PORT = 5555;
const app = express();

app.use(hwRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));