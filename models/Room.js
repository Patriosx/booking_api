import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
    /*
    Ejemplo
    {number:101, unavailableDates:[01.05.2022,02.05.2022]}
    {number:102, unavailableDates:[01.05.2022]}
    {number:103, unavailableDates:[02.05.2022, 03.05.2022]}
    */
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
