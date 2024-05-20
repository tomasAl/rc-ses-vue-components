import {ThemeDefinition} from "vuetify";

export const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#d35400",
    secondary: "#8e44ad",
    background: "#ecf0f1",
    error: "#c0392b",
    info: "#2980b9",
    success: "#27ae60",
    warning: "#f1c40f",
  },
};

export const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#d35400",
    secondary: "#8e44ad",
    background: "#2f3640",
    error: "#c0392b",
    info: "#2980b9",
    success: "#27ae60",
    warning: "#f1c40f",
  },
};
