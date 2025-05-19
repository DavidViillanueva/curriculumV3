import { Palette } from "@mui/material";

export interface Theme {
  image: string;
  font: string;
  fontSize: number;
  palette: {
    mode: Palette["mode"];
    primary: Palette["primary"];
    secondary: Palette["secondary"];
    background: Palette["background"];
    text: Palette["text"];
    error?: Palette["error"];
    warning?: Palette["warning"];
    success?: Palette["success"];
    divider?: string;
  };
}

export type AvailableThemes = "muppet" | "lego" | "cn" | "nigth" | "default";

export const AvailableThemesThemeList: AvailableThemes[] = [
  "muppet",
  "lego",
  "cn",
  "nigth",
  "default",
];

export function getRandomThemeKey(): AvailableThemes {
  const randomIndex = Math.floor(
    Math.random() * AvailableThemesThemeList.length
  );
  return AvailableThemesThemeList[randomIndex];
}

export const myThemes: { [key in AvailableThemes]: Theme } = {
  default: {
    image: "./default.jpg",
    font: "Roboto, sans-serif",
    fontSize: 14,
    palette: {
      mode: "light",
      primary: {
        main: "#9c27b0", // Violeta fuerte
        light: "#d05ce3", // Violeta claro
        dark: "#6a0080", // Violeta oscuro
        contrastText: "#ffffff", // Blanco para contraste
      },
      secondary: {
        main: "#f06292", // Rosa fuerte
        light: "#f8a5c2", // Rosa claro
        dark: "#ba2d65", // Rosa oscuro
        contrastText: "#ffffff",
      },
      background: {
        default: "#fdf2ff", // Fondo lavanda pálido
        paper: "#ffffff", // Blanco para tarjetas, papeles
      },
      text: {
        primary: "#2e003e", // Violeta oscuro profundo
        secondary: "#6f4a79", // Lavanda oscuro
        disabled: "#bdaac5", // Gris violáceo claro
      },
      error: {
        main: "#e53935", // Rojo fuerte
        light: "#ff6f60",
        dark: "#ab000d",
        contrastText: "#ffffff",
      },
      warning: {
        main: "#ffb74d", // Naranja suave
        light: "#ffe97d",
        dark: "#c88719",
        contrastText: "#000000",
      },
      success: {
        main: "#81c784", // Verde éxito
        light: "#b2fab4",
        dark: "#519657",
        contrastText: "#ffffff",
      },
      divider: "#e0cfe6", // Línea sutil rosada/violeta
    },
  },

  muppet: {
    image: "./muppet.jpeg",
    font: "var(--font-muppet), cursive",
    fontSize: 14,
    palette: {
      mode: "light",
      primary: {
        main: "#5cb85c", // Verde vibrante (Kermit)
        light: "#8fdc8f", // Verde claro
        dark: "#3c8d3c", // Verde oscuro
        contrastText: "#ffffff", // Blanco para contraste
      },
      secondary: {
        main: "#d6336c", // Rosa fuerte (Miss Piggy)
        light: "#ff6f9c", // Rosa claro
        dark: "#9a0043", // Rosa oscuro
        contrastText: "#ffffff",
      },
      background: {
        default: "#fff6e6", // Beige claro (como fondo teatral)
        paper: "#ffffff", // Blanco para tarjetas, papeles
      },
      text: {
        primary: "#1b1b1b", // Negro casi puro
        secondary: "#5e5e5e", // Gris medio
        disabled: "#bdbdbd", // Gris claro
      },
      error: {
        main: "#e24e1b", // Naranja quemado (Animal)
        light: "#ff7d4c",
        dark: "#a63200",
        contrastText: "#ffffff",
      },
      warning: {
        main: "#ffc107", // Amarillo vivo (Fozzie)
        light: "#ffe066",
        dark: "#c79100",
        contrastText: "#000000",
      },
      success: {
        main: "#81c784", // Verde éxito
        light: "#b2fab4",
        dark: "#519657",
        contrastText: "#ffffff",
      },
      divider: "#e0e0e0", // Línea sutil
    },
  },

  lego: {
    image: "./lego.jpeg",
    font: "var(--font-lego), cursive",
    fontSize: 14,
    palette: {
      mode: "light",
      primary: {
        main: "#e30613", // Rojo LEGO clásico
        light: "#ff5f5f", // Rojo claro
        dark: "#a0000b", // Rojo oscuro
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#0055bf", // Azul LEGO clásico
        light: "#4d8fe6",
        dark: "#003c82",
        contrastText: "#ffffff",
      },
      background: {
        default: "#f4f4f4", // Gris muy claro, estilo manual LEGO
        paper: "#ffffff", // Blanco para tarjetas/dialogs
      },
      text: {
        primary: "#1e1e1e", // Negro para legibilidad
        secondary: "#4f4f4f",
        disabled: "#9e9e9e",
      },
      warning: {
        main: "#ffcd00", // Amarillo LEGO
        light: "#ffe766",
        dark: "#c79a00",
        contrastText: "#000000",
      },
      success: {
        main: "#6ac259", // Verde tipo bloque de pasto
        light: "#a3e89a",
        dark: "#3f8f30",
        contrastText: "#000000",
      },
      error: {
        main: "#d62828", // Rojo oscuro para errores
        light: "#ff6b6b",
        dark: "#9e0000",
        contrastText: "#ffffff",
      },
      divider: "#c4c4c4", // Líneas tenues tipo blueprint
    },
  },

  cn: {
    image: "./cn.jpeg",
    font: '"Comic Sans MS", cursive',
    fontSize: 14,
    palette: {
      mode: "light",
      primary: {
        main: "#00c2ff", // Azul cartoon (como el de Las Chicas Superpoderosas)
        light: "#66e0ff", // Azul claro brillante
        dark: "#008bb3", // Azul más profundo
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#ff3cac", // Rosa vibrante (estilo retro de CN)
        light: "#ff77cd",
        dark: "#c6007e",
        contrastText: "#ffffff",
      },
      background: {
        default: "#ffffff", // Blanco puro como en el logo clásico
        paper: "#f5f5f5", // Gris claro para elementos elevados
      },
      text: {
        primary: "#000000", // Negro para contraste fuerte
        secondary: "#555555", // Gris medio
        disabled: "#bdbdbd", // Gris claro
      },
      warning: {
        main: "#ffc107", // Amarillo cartoon
        light: "#ffe066",
        dark: "#c79100",
        contrastText: "#000000",
      },
      success: {
        main: "#7cd992", // Verde cartoon alegre
        light: "#b6f2c1",
        dark: "#41a261",
        contrastText: "#000000",
      },
      error: {
        main: "#ff5252", // Rojo eléctrico
        light: "#ff867f",
        dark: "#c50e29",
        contrastText: "#ffffff",
      },
      divider: "#e0e0e0",
    },
  },

  nigth: {
    image: "./night.jpeg",
    font: "AliceFont, Arial, sans-serif",
    fontSize: 20,
    palette: {
      mode: "dark",
      primary: {
        main: "#3db6a2",
        light: "#6eeed1",
        dark: "#008673",
        contrastText: "#000000",
      },
      secondary: {
        main: "#9ca3af",
        light: "#d0d7e3",
        dark: "#6d737d",
        contrastText: "#000000",
      },
      background: {
        default: "#1f1f1f",
        paper: "#2c2c2c",
      },
      text: {
        primary: "#e4e4dc",
        secondary: "#c2c2b9",
        disabled: "#7d7d76",
      },
      warning: {
        main: "#eab308",
        light: "#fff350",
        dark: "#b38600",
        contrastText: "#000000",
      },
      divider: "#3a3a3a",
    },
  },
};
