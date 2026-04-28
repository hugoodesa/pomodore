import { createContext, type Dispatch, type SetStateAction } from "react";

export type ThemeType = "dark" | "light";
export type ThemeContextType = {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {
    throw new Error("setTheme called outside ThemeProvider");
  },
});
