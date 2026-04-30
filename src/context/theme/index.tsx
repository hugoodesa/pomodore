import { createContext } from "react";

export type ThemeType = "dark" | "light";
export type ThemeContextType = {
  theme: ThemeType;
};
export const ThemeContext = createContext<ThemeType>("dark");
