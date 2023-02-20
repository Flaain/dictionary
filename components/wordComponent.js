export default class WordComponent {
  constructor(selectors) {
    this._selectors = selectors;
    this._state = {
      word: "",
    };

    this._longestDefinitionsByPartOfSpeech = {};

    this._wordContainer = document.querySelector(this.selectors.wordContainer);
    this._searchForm = this._wordContainer.querySelector(this.selectors.form);
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

  showLoading() {
    const children = Array.from(this._wordContainer.children);
    children.forEach((child) => {
      if (child !== this._searchForm) {
        this._wordContainer.removeChild(child);
      }
    });

    this._preloader = document.createElement("div");
    this._preloader.classList.add("word-preloader");
    this._preloader.insertAdjacentHTML(
      "afterbegin",
      `
      <svg class="word-preloader_type_circular" viewBox="25 25 50 50">
        <circle class="word-preloader__path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterLimit="10" />
      </svg>
    `
    );
    this._wordContainer.appendChild(this._preloader);
  }

  hideLoading() {
    if (this._preloader && this._wordContainer.contains(this._preloader)) {
      this._wordContainer.removeChild(this._preloader);
    }
  }

  render(data) {
    this.state.audio = "";
    this._longestDefinitionsByPartOfSpeech = {};

    data[0].meanings.forEach((meaning) => {
      console.log(meaning);
      this._partOfSpeech = meaning.partOfSpeech;
      this._longestDefinitionsArr = this._longestDefinitionsByPartOfSpeech[this._partOfSpeech] || [];
      if (meaning.definitions.length > this._longestDefinitionsArr.length) {
        this._longestDefinitionsByPartOfSpeech[this._partOfSpeech] = meaning.definitions;
      }
    });

    this._wordHeader = document.createElement("div");
    this._wordHeader.classList.add(this.selectors.wordHeader.slice(1));

    this._wordHeader.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="word__text">
      <h1 class="word__target">${data[0].word}</h1>
      <span class="word__phonetic">
        ${
          data[0].phonetics && data[0].phonetics.length > 0
            ? data[0].phonetics
                .map((phonetic) => phonetic.text)
                .filter((text) => typeof text !== "undefined" && text !== "")[0]
            : "no phonetic found"
        }
      </span>
    </div>    
      <button class="word__audio-btn">
          <svg class="word__audio-btn-icon" width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5.25V44.7461L43.5703 25L10 5.25Z" />
          </svg>
      </button>
  `
    );

    this._wordContainer.appendChild(this._wordHeader);

    let i = 0;

    while (i < data[0].phonetics.length) {
      if (data[0].phonetics[i].audio !== "") {
        this.state = { audio: data[0].phonetics[i].audio };
        break;
      } else {
        i++;
      }
    }

    this._speechKeys = Object.keys(this._longestDefinitionsByPartOfSpeech);

    this._hasNounValue = this._speechKeys.includes("noun");
    this._hasVerbValue = this._speechKeys.includes("verb");
    this._hasAdjectiveValue = this._speechKeys.includes("adjective");

    this._partOfSpeechContainer = document.createElement("div");
    this._partOfSpeechContainer.classList.add(this.selectors.partOfSpeechContainer.slice(1));
    this._partOfSpeechContainer.insertAdjacentHTML(
      "afterbegin",
      `
    <span class="word__speech">${this._hasNounValue ? "noun" : this._hasVerbValue ? "verb" : "adjective"}</span>
    <div class="word__seperator"></div>
`
    );
    this._wordContainer.insertBefore(this._partOfSpeechContainer, this._wordHeader.nextSibling);
    console.log(this._longestDefinitionsByPartOfSpeech);
    this._wordMeaning = document.createElement("div");
    this._wordMeaning.classList.add(this.selectors.wordMeaning.slice(1));
    this._wordMeaning.insertAdjacentHTML(
      "afterbegin",
      `
        <h2 class="word__title">Meaning</h2>
        <ul class="word__list">
          ${
            this._hasNounValue
              ? `
            <li class="word__item">
              <p class="word__description">${this._longestDefinitionsByPartOfSpeech["noun"][0].definition}</p>
            </li>
            ${
              this._longestDefinitionsByPartOfSpeech["noun"][1]
                ? `<li class="word__item"><p class="word__description">${this._longestDefinitionsByPartOfSpeech["noun"][1].definition}</p></li>`
                : ""
            }
            ${
              this._longestDefinitionsByPartOfSpeech["noun"][2]
                ? `<li class="word__item"><p class="word__description">${this._longestDefinitionsByPartOfSpeech["noun"][2].definition}</p></li>`
                : ""
            }
          `
              : this._hasVerbValue
              ? `
            <li class="word__item">
              <p class="word__description">${this._longestDefinitionsByPartOfSpeech["verb"][0].definition}</p>
            </li>
            ${
              this._longestDefinitionsByPartOfSpeech["verb"][1]
                ? `<li class="word__item"><p class="word__description">${this._longestDefinitionsByPartOfSpeech["verb"][1].definition}</p></li>`
                : ""
            }
            ${
              this._longestDefinitionsByPartOfSpeech["verb"][2]
                ? `<li class="word__item"><p class="word__description">${this._longestDefinitionsByPartOfSpeech["verb"][2].definition}</p></li>`
                : ""
            }
          `
              : this._hasAdjectiveValue
              ? `
            <li class="word__item">
              <p class="word__description">${this._longestDefinitionsByPartOfSpeech["adjective"][0].definition}</p>
            </li>
            ${
              this._longestDefinitionsByPartOfSpeech["adjective"][1]
                ? `<li class="word__item"><p class="word__description">${this._longestDefinitionsByPartOfSpeech["adjective"][1].definition}</p></li>`
                : ""
            }
            ${
              this._longestDefinitionsByPartOfSpeech["adjective"][2]
                ? `<li class="word__item"><p class="word__description">${this._longestDefinitionsByPartOfSpeech["adjective"][2].definition}</p></li>`
                : ""
            }
          `
              : ""
          }
        </ul>
      `
    );

    this._wordContainer.insertBefore(this._wordMeaning, this._partOfSpeechContainer.nextSibling);

    switch (document.querySelector(this.selectors.speech).textContent) {
      case "noun":
        if (
          this._longestDefinitionsByPartOfSpeech["noun"]
            .filter((element) => element.example)
            .map((element) => element.example).length > 0 &&
          !document.querySelector(this.selectors.wordExample)
        ) {
          this._wordExample = document.createElement("div");
          this._wordExample.classList.add(this.selectors.wordExample.slice(1));
          this._wordExample.insertAdjacentHTML(
            "afterbegin",
            `
        <h2 class="word__title">Example</h2>
        <ul class="word__list">
            <li class="word__item">
                <p class="word__description">${
                  this._longestDefinitionsByPartOfSpeech["noun"]
                    .filter((element) => element.example)
                    .map((element) => element.example)[0]
                }</p>
            </li>
            ${
              this._longestDefinitionsByPartOfSpeech["noun"]
                .filter((element) => element.example)
                .map((element) => element.example)[1]
                ? `
            <li class="word__item">
                <p class="word__description">${
                  this._longestDefinitionsByPartOfSpeech["noun"]
                    .filter((element) => element.example)
                    .map((element) => element.example)[1]
                }</p>
            </li>
            `
                : ""
            }
            ${
              this._longestDefinitionsByPartOfSpeech["noun"]
                .filter((element) => element.example)
                .map((element) => element.example)[2]
                ? `
            <li class="word__item">
                <p class="word__description">${
                  this._longestDefinitionsByPartOfSpeech["noun"]
                    .filter((element) => element.example)
                    .map((element) => element.example)[2]
                }</p>
            </li>
            `
                : ""
            }
            ${
              this._longestDefinitionsByPartOfSpeech["noun"]
                .filter((element) => element.example)
                .map((element) => element.example)[3]
                ? `
            <li class="word__item">
                <p class="word__description">${
                  this._longestDefinitionsByPartOfSpeech["noun"]
                    .filter((element) => element.example)
                    .map((element) => element.example)[3]
                }</p>
            </li>
            `
                : ""
            }
            
        </ul>
        `
          );

          this._wordContainer.insertBefore(this._wordExample, this._wordMeaning.nextSibling);
        }
        break;
      case "verb":
        if (
          this._longestDefinitionsByPartOfSpeech["verb"]
            .filter((element) => element.example)
            .map((element) => element.example).length > 0 &&
          !document.querySelector(this.selectors.wordExample)
        ) {
          this._wordExample = document.createElement("div");
          this._wordExample.classList.add(this.selectors.wordExample.slice(1));
          this._wordExample.insertAdjacentHTML(
            "afterbegin",
            `
        <h2 class="word__title">Example</h2>
        <ul class="word__list">
            <li class="word__item">
                <p class="word__description">${
                  this._longestDefinitionsByPartOfSpeech["verb"]
                    .filter((element) => element.example)
                    .map((element) => element.example)[0]
                }</p>
            </li>
            ${
              this._longestDefinitionsByPartOfSpeech["verb"]
                .filter((element) => element.example)
                .map((element) => element.example)[1]
                ? `
            <li class="word__item">
                <p class="word__description">${
                  this._longestDefinitionsByPartOfSpeech["verb"]
                    .filter((element) => element.example)
                    .map((element) => element.example)[1]
                }</p>
            </li>
            `
                : ""
            }
            ${
              this._longestDefinitionsByPartOfSpeech["verb"]
                .filter((element) => element.example)
                .map((element) => element.example)[2]
                ? `
            <li class="word__item">
                <p class="word__description">${
                  this._longestDefinitionsByPartOfSpeech["verb"]
                    .filter((element) => element.example)
                    .map((element) => element.example)[2]
                }</p>
            </li>
            `
                : ""
            }
            ${
              this._longestDefinitionsByPartOfSpeech["verb"]
                .filter((element) => element.example)
                .map((element) => element.example)[3]
                ? `
            <li class="word__item">
                <p class="word__description">${
                  this._longestDefinitionsByPartOfSpeech["verb"]
                    .filter((element) => element.example)
                    .map((element) => element.example)[3]
                }</p>
            </li>
            `
                : ""
            }
            
        </ul>
        `
          );
          this._wordContainer.insertBefore(this._wordExample, this._wordMeaning.nextSibling);
        }
        break;
      case "adjective":
        if (
          this._longestDefinitionsByPartOfSpeech["adjective"]
            .filter((element) => element.example)
            .map((element) => element.example).length > 0 &&
          !document.querySelector(this.selectors.wordExample)
        ) {
          this._wordExample = document.createElement("div");
          this._wordExample.classList.add(this.selectors.wordExample.slice(1));
          this._wordExample.insertAdjacentHTML(
            "afterbegin",
            `
          <h2 class="word__title">Example</h2>
          <ul class="word__list">
              <li class="word__item">
                  <p class="word__description">${
                    this._longestDefinitionsByPartOfSpeech["adjective"]
                      .filter((element) => element.example)
                      .map((element) => element.example)[0]
                  }</p>
              </li>
              ${
                this._longestDefinitionsByPartOfSpeech["adjective"]
                  .filter((element) => element.example)
                  .map((element) => element.example)[1]
                  ? `
              <li class="word__item">
                  <p class="word__description">${
                    this._longestDefinitionsByPartOfSpeech["adjective"]
                      .filter((element) => element.example)
                      .map((element) => element.example)[1]
                  }</p>
              </li>
              `
                  : ""
              }
              ${
                this._longestDefinitionsByPartOfSpeech["adjective"]
                  .filter((element) => element.example)
                  .map((element) => element.example)[2]
                  ? `
              <li class="word__item">
                  <p class="word__description">${
                    this._longestDefinitionsByPartOfSpeech["adjective"]
                      .filter((element) => element.example)
                      .map((element) => element.example)[2]
                  }</p>
              </li>
              `
                  : ""
              }
              ${
                this._longestDefinitionsByPartOfSpeech["adjective"]
                  .filter((element) => element.example)
                  .map((element) => element.example)[3]
                  ? `
              <li class="word__item">
                  <p class="word__description">${
                    this._longestDefinitionsByPartOfSpeech["adjective"]
                      .filter((element) => element.example)
                      .map((element) => element.example)[3]
                  }</p>
              </li>
              `
                  : ""
              }
              
          </ul>
          `
          );
          this._wordContainer.insertBefore(this._wordExample, this._wordMeaning.nextSibling);
        }
        break;
    }

    this._bindEventHandlers();
  }

  playAudio() {
    new Audio(this.state.audio).play();
  }
}