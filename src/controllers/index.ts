import { Request, Response } from "express";
import { execute } from "../.graphclient";
import gql from "graphql-tag";

const tokens_config = {
  arbitrum: {
    WETH: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  },
  "arbitrum-sepolia": {
    WETH: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  },
};

require("dotenv").config();
const network = process.env.network ? process.env.network : "arbitrum-sepolia";
const network_tokens = (tokens_config as any)[network];

interface PriceTicker {
  tokenAddress: string;
  tokenSymbol: string;
  minPrice: string;
  maxPrice: string;
  updatedAt: number;
}

interface Price24h {
  tokenSymbol: string;
  high: number;
  low: number;
  open: number;
  close: number;
}

interface Candle {
  candles: number[];
  period: string;
}


const getTickersData: () => Promise<PriceTicker[]> = async () => {
  const data: PriceTicker[] = [];
  for (let tokenSymbol in network_tokens) {
    let tokenAddress = network_tokens[tokenSymbol];
    const query = gql`
    query queryPriceTicker {
      tokenPrice(id: "${tokenAddress}") {
        minPrice
        maxPrice
        updatedAt
      }
    }`;
    const result = await execute(query, {});
    let tokenPrice = result.data.tokenPrice;
    data.push({
      tokenAddress: tokenAddress,
      tokenSymbol: tokenSymbol,
      minPrice: tokenPrice.minPrice,
      maxPrice: tokenPrice.maxPrice,
      updatedAt: tokenPrice.updatedAt,
    });
  }
  return data;
};

const get24hPricesData: () => Promise<Price24h[]> = async () => {
  const data: Price24h[] = [];
  for (let tokenSymbol in network_tokens) {
    let candles = await getCandlesData(tokenSymbol, "1d", 1);
    if (candles.length === 0) {
      continue;
    }
    let candleData = candles[0].candles;
    data.push({
      tokenSymbol: tokenSymbol,
      high: candleData[2],
      low: candleData[3],
      open: candleData[1],
      close: candleData[4],
    });
  }

  return data;
};

const getCandlesData: (
  tokenSymbol: string,
  period: string,
  limit: number
) => Promise<Candle[]> = async (tokenSymbol, period, limit) => {
  tokenSymbol = tokenSymbol.toUpperCase();
  let tokenAddress = network_tokens[tokenSymbol];

  const query = gql`
  query queryCandles {
    candles(
      orderBy: timestamp,
      orderDirection: desc,
      first: "${limit}", 
      where: {marketAddress: "${tokenAddress}"}, period: "${period}"}
      ) {
        timestamp
        open
        close
        high
        low
      }`;

  const result = await execute(query, {});
  const data: Candle[] = result.data.candles.map((candle: any) => ({
    candles: [
      candle.timestamp,
      candle.open,
      candle.high,
      candle.low,
      candle.close,
    ],
    period: period,
  }));

  return data;
};

export class Controller {
  public async getPriceTickers(req: Request, res: Response): Promise<void> {
    const data: PriceTicker[] = await getTickersData();
    res.json(data);
  }

  public async get24hPrices(req: Request, res: Response): Promise<void> {
    const data: Price24h[] = await get24hPricesData();
    res.json(data);
  }

  public async getCandles(req: Request, res: Response): Promise<void> {
    const data: Candle[] = await getCandlesData(
      req.query.tokenSymbol as string,
      req.query.period as string,
      Number(req.query.limit as string)
    );
    res.json(data);
  }
}
