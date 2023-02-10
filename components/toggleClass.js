import { themeBtn, body, logo } from "../utils/variables.js";

export function toggleClass() {
    const elements = [themeBtn, body, logo];
    const classes = ['theme__btn_state_active', 'body_theme_dark', 'logo__svg_theme_dark'];

    elements.forEach((element, index) => {
        element.classList.toggle(classes[index]);
    });
}
