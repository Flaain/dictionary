import { LIGHT_THEME, DARK_THEME, toggleClasses, sunSvg, moonSvg } from '../utils/variables.js';

export default class Theme {
    
    constructor({ svgWrapper: svgWrapperSelector }) {
        this._currentTheme = localStorage.getItem('theme') || LIGHT_THEME;
        this._svgWrapper = document.querySelector(svgWrapperSelector);
    }

    get currentTheme() {
        return this._currentTheme;
    }

    set currentTheme(value) {
        this._currentTheme = value;
        localStorage.setItem('theme', value);
        this._updateSvg();
    }
    
    switchTheme() {
        toggleClasses.toggle();
        this.currentTheme = this.currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    }

    _updateSvg() {
        this._svgWrapper.innerHTML = this.currentTheme === DARK_THEME ? sunSvg : moonSvg; 
    }

    checkCurrentTheme(value) {
        this.currentTheme = value;
        toggleClasses.toggleOnLoad(value);
    }
}