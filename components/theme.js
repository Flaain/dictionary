import { LIGHT_THEME, DARK_THEME, themeSvg, switchClasses } from '../utils/variables.js';

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
        switchClasses.toggle();
        this.currentTheme = this.currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    }

    checkCurrentTheme(value) {
        this.currentTheme = value;
        switchClasses.toggleOnLoad(value);
    }
}