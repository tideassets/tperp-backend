import { Express } from "express";
import { Controller } from "../controllers/index";

export function setRoutes(app: Express) {
  const controller = new Controller();

  app.get(
    "/priceTickers",
    controller.getPriceTickers.bind(controller)
  );
  app.get("/24hPrices", controller.get24hPrices.bind(controller));
  app.get("/candles", controller.getCandles.bind(controller));
}
