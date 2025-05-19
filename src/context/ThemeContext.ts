import { createContext } from "react";
import { AvailableThemes } from "./Themes";

type ThemeContextType = {
  imageTheme: string | undefined;
  fontTheme: string;
  setTheme: (theme: AvailableThemes) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  imageTheme: "muppet.jpeg", // Default value
  fontTheme: "default-font", // Default value
  // Default functions that do nothing
  setTheme: () => {},
});
