import { themeBtn } from '../utils/variables.js';
import { checkCurrentTheme } from '../components/checkCurrentTheme.js';
import { switchTheme } from '../components/switchTheme.js';

themeBtn.addEventListener("click", switchTheme);
checkCurrentTheme();
