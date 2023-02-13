import { LIGHT_THEME, DARK_THEME, toggleClasses, svgWrapper, sunSvg, moonSvg } from '../utils/variables.js';

export default class Theme {
    
    constructor() {
        this._currentTheme = localStorage.getItem('theme') || LIGHT_THEME;
        this._svgWrapper = svgWrapper;
    }

    get currentTheme() {
        return this._currentTheme;
    }

    set currentTheme(value) {
        this._currentTheme = value;
        localStorage.setItem('theme', value);
        this.svgWrapper = this.currentTheme === DARK_THEME ? sunSvg : moonSvg; 
    }

    get svgWrapper() {
        return this._svgWrapper;
    }

    set svgWrapper(value) {
        return this._svgWrapper.innerHTML = value;
    }
    
    switchTheme() {
        toggleClasses.toggle();
        this.currentTheme = this.currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    }

    checkCurrentTheme(value) {
        this.currentTheme = value;
        toggleClasses.toggleOnLoad(value);
    }
}