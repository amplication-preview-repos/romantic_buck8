import { Storygenerator as TStorygenerator } from "../api/storygenerator/Storygenerator";

export const STORYGENERATOR_TITLE_FIELD = "id";

export const StorygeneratorTitle = (record: TStorygenerator): string => {
  return record.id?.toString() || String(record.id);
};
