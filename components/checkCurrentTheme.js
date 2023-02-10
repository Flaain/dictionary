import { LIGHT_THEME } from "../utils/variables.js";
import { setThemeSvg } from "./setThemeSvg.js";
import { toggleOnLoad } from "./toggleOnLoad.js";

export function checkCurrentTheme() {
    const currentTheme = localStorage.getItem('theme') || LIGHT_THEME;
    toggleOnLoad(currentTheme);
    setThemeSvg(currentTheme);
}