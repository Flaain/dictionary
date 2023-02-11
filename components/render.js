import { searchForm } from '../utils/variables.js';

export class Render {
    constructor() {
        this._word = document.querySelector('.word__target');
    }

    get word() {
        return this._word.textContent;
    }

    set word(value) {
        return this._word.textContent = value;
    }

    render() {
        this.word = searchForm.state;
    }
}