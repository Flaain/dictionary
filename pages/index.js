import { LIGHT_THEME, theme, themeBtn } from "../utils/variables.js";

theme.checkCurrentTheme(localStorage.getItem("theme") || LIGHT_THEME);
themeBtn.addEventListener("click", theme.switchTheme.bind(theme));