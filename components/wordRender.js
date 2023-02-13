import { form } from '../utils/variables.js';

export default class WordRender {
    constructor() {
        this._word = document.querySelector('.word__target');
    }

    get word() {
        return this._word.textContent;
    }

    set word(value) {
        return this._word.textContent = value;
    }

    render(data) {
        this.word = form.state.word;
    }
}