import { nanoid } from "nanoid";
import { URL_SLUG_LENGTH } from "./const";

export function generateSlug(len = URL_SLUG_LENGTH): string {
  return nanoid(len);
}
