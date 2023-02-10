import { svgWrapper, sunSvg, moonSvg, DARK_THEME } from "../utils/variables.js";

export function setThemeSvg(currentTheme) {
    return svgWrapper.innerHTML = currentTheme === DARK_THEME ? sunSvg : moonSvg
}