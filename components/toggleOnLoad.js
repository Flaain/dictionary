import { themeBtn, body, logo, DARK_THEME } from "../utils/variables.js";

export function toggleOnLoad(currentTheme) {
    const elements = [themeBtn, body, logo];
    const classes = ['theme__btn_state_active', 'body_theme_dark', 'logo__svg_theme_dark'];

    elements.forEach((element, index) => {
        element.classList.toggle(classes[index], currentTheme === DARK_THEME);
    });
}

