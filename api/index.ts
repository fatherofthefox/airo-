import type { VercelRequest, VercelResponse } from "@vercel/node";
import express, { type Request, Response, NextFunction } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/dummy", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  console.error("Internal Server Error:", err);
  if (!res.headersSent) {
    res.status(status).json({ message });
  }
});

export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
