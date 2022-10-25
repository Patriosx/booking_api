import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

export default function config(app) {
  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());
}
