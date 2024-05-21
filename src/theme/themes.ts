import {ThemeDefinition} from "vuetify";
import Colors from './colors'

export const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: Colors.primary.main,
    secondary: Colors.secondary.main,
    background: "#ffffff",
    error: Colors.error.main,
    info: Colors.grey.main,
    success: Colors.secondary.main,
    warning: Colors.warning.main,
  },
  variables: {

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
