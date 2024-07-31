//bg-blue-950 border-blue-950
//bg-zinc-900 border-zinc-900
//bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products";

//bg-teal-700 border-teal-700
export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Blue", value: "blue", tw: "blue-950" },
  { label: "Rose", value: "rose", tw: "rose-950" },
  { label: "Teal", value: "teal", tw: "teal-700" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone X",
      value: "iphonex",
    },
    {
      label: "iPhone 11",
      value: "iphone11",
    },
    {
      label: "iPhone 11 Pro",
      value: "iphone11pro",
    },
    {
      label: "iPhone 11 Pro max",
      value: "iphone11promax",
    },
    {
      label: "iPhone 12",
      value: "iphone12",
    },
    {
      label: "iPhone 12 Pro",
      value: "iphone12pro",
    },
    {
      label: "iPhone 12 Pro max",
      value: "iphone12promax",
    },
    {
      label: "iPhone 13",
      value: "iphone13",
    },
    { label: "iPhone 13 Pro", value: "iphone13pro" },
    {
      label: "iPhone 13 Pro max",
      value: "iphone13promax",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      label: "iPhone 14 Plus",
      value: "iphone14plus",
    },
    {
      label: "iPhone 14 Pro",
      value: "iphone14pro",
    },
    {
      label: "iPhone 14 Pro max",
      value: "iphone14promax",
    },
    {
      label: "iPhone 15",
      value: "iphone15",
    },
    {
      label: "iPhone 15 Plus",
      value: "iphone15plus",
    },
    { label: "iPhone 15 Pro", value: "iphone15pro" },
    {
      label: "iPhone 15 Pro max",
      value: "iphone15promax",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicon,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch resistent coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
