import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function splitArray<T>(array: Array<T>, number: number) {
  const result: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i++) {
    const index = i % number;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

export function fromatPrice(price: number) {
  const formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(price);
}
