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

        if (this.currentTheme === DARK_THEME) {
            localStorage.setItem('theme', LIGHT_THEME);
            themeSvg.setSvg(LIGHT_THEME);
            this.currentTheme = LIGHT_THEME;
        } else {
            localStorage.setItem('theme', DARK_THEME);
            themeSvg.setSvg(DARK_THEME);
            this.currentTheme = DARK_THEME;
        }
    }

    setCurrentTheme(value) {
        this.currentTheme = value;
        switchClasses.toggleOnLoad(value);
    }
}
