import { themeBtn, body, logo, DARK_THEME } from "../utils/variables.js";

export class toggleClass {
    constructor() {
        this.elements = [themeBtn, body, logo];
        this.classes = ['theme__btn_state_active', 'body_theme_dark', 'logo__svg_theme_dark'];
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