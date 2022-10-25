import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

export default function router(app) {
  app.use("/api/auth", authRoute);
  app.use("/api/users", usersRoute);
  app.use("/api/hotels", hotelsRoute);
  app.use("/api/rooms", roomsRoute);
  app.use((req, res, next) => {
    res.status(404);
    res.json({
      message: "Route not found",
    });
  });
}
