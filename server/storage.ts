import { type Dummy, type InsertDummy } from "@shared/schema";

export interface IStorage {
  getDummy(): Promise<Dummy | undefined>;
}

export class MemStorage implements IStorage {
  async getDummy(): Promise<Dummy | undefined> {
    return undefined;
  }
}

export const storage = new MemStorage();
