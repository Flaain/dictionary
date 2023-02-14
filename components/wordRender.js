export default class WordRender {
  constructor(selectors) {
    this._selectors = selectors;
    this._state = {
      word: "",
    };

    this._longestDefinitionsByPartOfSpeech = {
      noun: [],
      verb: [],
    };
    
    this._wordContainer = document.querySelector(this.selectors.wordContainer);
  }

  get selectors() {
    return this._selectors;
  }

  set selectors(value) {
    this._selectors = Object.assign({}, this._selectors, value);
    return this._selectors;
  }

  get state() {
    return this._state;
  }

  set state(value) {
    this._state = Object.assign({}, this._state, value);
    return this._state;
  }

  _bindEventHandlers() {
    this.audioBtn = document.querySelector(this.selectors.audioBtn);
    if (this.audioBtn) {
      this.audioBtn.addEventListener("click", (event) => {
        event.preventDefault();
        this.playAudio();
      });
    }
  }

  render(data) {
    this._longestDefinitionsByPartOfSpeech = {};
    this._searchForm = this._wordContainer.querySelector(this.selectors.form);

    while (this._wordContainer.lastChild !== this._searchForm) {
      this._wordContainer.removeChild(this._wordContainer.lastChild);
    }

    this._wordContainer.appendChild(this._searchForm);

    data[0].meanings.forEach((meaning) => {
      this._partOfSpeech = meaning.partOfSpeech;
      this._longestDefinitionsArr = this._longestDefinitionsByPartOfSpeech[this._partOfSpeech] || [];

      if (meaning.definitions.length > this._longestDefinitionsArr.length) {
        this._longestDefinitionsByPartOfSpeech[this._partOfSpeech] = meaning.definitions;
      }
    });

    console.log(this._longestDefinitionsByPartOfSpeech);

    let i = 0;

    while (i < data[0].phonetics.length) {
      if (data[0].phonetics[i].audio !== "") {
        this.state = { audio: data[0].phonetics[i].audio };
        break;
      } else {
        i++;
      }
    }

    this._bindEventHandlers();
  }

  playAudio() {
    new Audio(this.state.audio).play();
  }
}
