import { svgWrapper, sunSvg, moonSvg, DARK_THEME } from '../utils/variables.js'

export class ThemeSvg {
    constructor() {
        this.svgWrapper = svgWrapper;
        this.sunSvg = sunSvg;
        this.moonSvg = moonSvg;
        this.DARK_THEME = DARK_THEME;
    }

    setSvg(currentTheme) {
        this.svgWrapper.innerHTML = currentTheme === this.DARK_THEME ? this.sunSvg : this.moonSvg; 
    }
}