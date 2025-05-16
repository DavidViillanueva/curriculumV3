import { createContext } from "react";
import { myThemes } from "./Themes";

type ThemeContextType = {
  imageTheme: string;
  fontTheme: string;
  setTheme: (theme: keyof typeof myThemes) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  imageTheme: "muppet.jpeg", // Default value
  fontTheme: "default-font", // Default value
  // Default functions that do nothing
  setTheme: () => {},
});
