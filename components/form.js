import { dictionaryApi } from '../utils/variables.js';

export class Form {
    constructor() {
        this._form = document.querySelector('.search-form');
        this._input = document.querySelector('.search-form__input');
        this._state = {
            word: '',
        };
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state.word = value;
    }

    search() {
        this._input.addEventListener('input', (event) => {
            const value = event.target.value;
            this.state.word = value;
        });
    }

    submit() {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (!this.state.word.trim()) {
                return;
            } else {
                dictionaryApi.fetchWord(this.state.word);
            }
        });
    }
}