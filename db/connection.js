import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGO;
// Conexión a la base de datos (MongoDB Atlas) y arrancar el servidor (Express)
const db_connection = () => {
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });
  mongoose
    .connect(URI)
    .then(() => {
      console.log("\x1b[36m%s\x1b[0m", "DB connected");
    })
    .catch((error) => console.log("connection error", error));
};
export default db_connection;
