import { DARK_THEME, LIGHT_THEME} from "../utils/variables.js";
import { setThemeSvg } from '../components/setThemeSvg.js';
import { toggleClass } from "./toggleClass.js";

export function switchTheme() {
    const currentTheme = localStorage.getItem('theme') || LIGHT_THEME;

    toggleClass();
    
    if (currentTheme === DARK_THEME) {
        localStorage.setItem('theme', LIGHT_THEME);
        setThemeSvg(LIGHT_THEME);
    } else {
        localStorage.setItem('theme', DARK_THEME);
        setThemeSvg(DARK_THEME);
    }
}