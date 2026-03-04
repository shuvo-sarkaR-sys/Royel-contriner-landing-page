import { parsePhoneNumber } from "awesome-phonenumber";

export function displayPhoneNumber(n: string): string {
  return parsePhoneNumber(`+1${n}`).number?.national || n;
}
