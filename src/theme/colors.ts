import { Colors } from "./types";

export const baseColors = {
  failure: "#fa113e",
  primary: "#FE1F0D",
  primaryBright: "#FE1F0D",
  primaryDark: "#000000",
  secondary: "#FE1F0D",
  success: "#15bd69",
  warning: "#fa113e",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f6f8", // light color
  backgroundDisabled: "#E9EAEB", 
  contrast: "#000000", // dark color
  invertedContrast: "#FFFFFF", // white
  input: "#eeeeee",
  tertiary: "#EFF4F5",
  text: "#FE1F0D",
  textDisabled: "#BDC2C4",
  textSubtle: "#FE1F0D",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FE1F0D",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#000000",
  tertiary: "#353547",
  text: "#FE1F0D",
  textDisabled: "#666171",
  textSubtle: "#FE1F0D",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
