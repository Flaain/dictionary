import { themeBtn, body, logo, DARK_THEME, inputSearch } from "../utils/variables.js";

export default class ToggleClasses {
    constructor() {
        this.elements = [themeBtn, body, logo, inputSearch];
        this.classes = ['theme__btn_state_active', 'body_theme_dark', 'logo__svg_theme_dark', 'search-form__input_theme_dark'];
    }

    toggle() {
        this.elements.forEach((element, index) => {
            element.classList.toggle(this.classes[index]);
        })
    }

    toggleOnLoad(currentTheme) {
        this.elements.forEach((element, index) => {
            element.classList.toggle(this.classes[index], currentTheme === DARK_THEME);
        })
    }
}