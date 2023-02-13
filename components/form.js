import { dictionaryapi } from "../utils/variables.js";

export default class Form {
    constructor(selectors) {
        this._form = document.querySelector(selectors.form);
        this._input = this._form.querySelector(selectors.input);
        this._state = {
            word: '',
        };

        this._bindEventHandlers();
    }

    get state() {
        return this._state;
    }

    set state(value) {
        return this._state.word = value;
    }

    _bindEventHandlers() {
        this._input.addEventListener('input', (event) => {
            this.state = event.target.value;
        });

        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log(this.state);
            this._submitForm();
        });
    }

    _submitForm() {
        if (!this.state.word.trim()) {
            return;
        } else {
            dictionaryapi.fetchWord(this.state.word);
        }
    }
}
