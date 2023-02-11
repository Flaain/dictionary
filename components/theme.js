import { LIGHT_THEME, DARK_THEME, themeSvg, toggleClasses } from '../utils/variables.js';

export class Theme {
    
    constructor() {
        this._currentTheme = localStorage.getItem('theme') || LIGHT_THEME;
    }

    get currentTheme() {
        return this._currentTheme;
    }

    set currentTheme(value) {
        this._currentTheme = value;
        localStorage.setItem('theme', value);
        themeSvg.setSvg(value);
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