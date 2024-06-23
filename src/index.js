import express from "express";
const app = express();
import { PORT } from "./config.js";
import { sequelize } from "./database/database.js";
import morgan from "morgan";
import taskRoutes from "./routes/task.routes.js";
import cors from "cors";
// import { Task } from "./models/task.js";

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(taskRoutes)

async function main() {
  try {
    await sequelize.sync({force: false});
    console.log("la conexion con la base de datos fue exitosa");
    app.listen(PORT, () => {
      console.log("Server running on port:", PORT);
    });
  } catch (error) {
    return console.log("Error: ", error.message);
  }
}

main();