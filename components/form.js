import { dictionaryapi } from "../utils/variables.js";

export default class Form {
  constructor({ form: formSelector, input: inputSelector }) {
    this._form = document.querySelector(formSelector);
    this._input = this._form.querySelector(inputSelector);
    this._state = {
      word: "",
    };

    this._bindEventHandlers();
  }

  get state() {
    return this._state;
  }

  set state(value) {
    return (this._state.word = value);
  }

  _bindEventHandlers() {
    this._input.addEventListener("input", (event) => {
      this.state = event.target.value;
    });

    this._form.addEventListener("submit", (event) => {
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
      this._input.value = '';
      this._input.blur();
    }
  }
}
