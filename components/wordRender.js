export default class WordRender {
    constructor(selectors) {
        this._selectors = selectors;
        this._state = {
            word: '',
        }
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
        return this._state
    }

    set state(value) {
        this._state = Object.assign({}, this._state, value);
        return this._state;          
    }

    _bindEventHandlers() {
        this.audioBtn = document.querySelector(this.selectors.audioBtn);
        if (this.audioBtn) {
          this.audioBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this.playAudio();
          });
        }
      }

    render(data) {
        this._searchForm = this._wordContainer.querySelector(this.selectors.form);
        
        while (this._wordContainer.lastChild !== this._searchForm) {
            this._wordContainer.removeChild(this._wordContainer.lastChild);
        }

        this._wordContainer.appendChild(this._searchForm);

        this._wordHeader = document.createElement('div');
        this._wordHeader.classList.add(this.selectors.wordHeader.slice(1));

        this._wordHeader.innerHTML = `
            <div class="word__text">
                <h1 class="word__target">${data[0].word}</h1>
                <span class="word__phonetic">${data[0].phonetics.length === 1 ? data[0].phonetics[0].text : data[0].phonetics[1].text}</span>
            </div>
            <button class="word__audio-btn">
                <svg class="word__audio-btn-icon" width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.25V44.7461L43.5703 25L10 5.25Z" />
                </svg>
            </button>
        `

        this._wordContainer.appendChild(this._wordHeader);

        this._partOfSpeechContainer = document.createElement('div');
        this._partOfSpeechContainer.classList.add(this.selectors.partOfSpeechContainer)
        this._partOfSpeechContainer.innerHTML = `
            <span class="word__speech">${data[0].meanings[0].partOfSpeech}</span>
            <div class="word__seperator"></div>
        `
        this._wordContainer.insertBefore(this._partOfSpeechContainer, this._wordHeader.nextSibling)

        this._wordMeaning = document.createElement('div');
        this._wordMeaning.classList.add(this.selectors.wordMeaning.slice(1));

        this._wordMeaning.innerHTML = `
            <h2 class="word__title">Meaning</h2>
            <ul class="word__list">
                <li class="word__item">
                    <p class="word__description">${data[0].meanings[0].definitions[0].definition}</p>
                </li>
                ${data[0].meanings[0].definitions[1]?.definition ? `
                    <li class="word__item">
                        <p class="word__description">${data[0].meanings[0].definitions[1].definition}</p>
                    </li>
                ` : ''}
                ${data[0].meanings[0].definitions[2]?.definition ? `
                    <li class="word__item">
                        <p class="word__description">${data[0].meanings[0].definitions[2].definition}</p>
                    </li>
                ` : ''}
            </ul>
        `;
    

        this._wordContainer.insertBefore(this._wordMeaning, this._partOfSpeechContainer.nextSibling)

        this._wordExample = document.createElement('div');
        this._wordExample.classList.add(this.selectors.wordExample.slice(1));

        this._wordExample.innerHTML = `
        <h2 class="word__title">Example</h2>
        <ul class="word__list">
            <li class="word__item">
                <p class="word__description">${data[0].meanings[0].definitions[0].example}</p>
            </li>
            ${data[0].meanings[0].definitions[1]?.example ? `
            <li class="word__item">
            <p class="word__description">${data[0].meanings[0].definitions[1]?.example}</p>
        </li>
            ` : ''}
            ${data[0].meanings[0].definitions[2]?.example ? `
            <li class="word__item">
            <p class="word__description">${data[0].meanings[0].definitions[2]?.example}</p>
        </li>
            ` : ''}
        </ul>
        `

        this._wordContainer.insertBefore(this._wordExample, this._wordMeaning.nextSibling)

        let i = 0;

        while (i < data[0].phonetics.length) {
            if (data[0].phonetics[i].audio !== '') {
                this.state = { audio: data[0].phonetics[i].audio }
                break;     
            } else {
                i++
            }
        }
        this._bindEventHandlers();
    }

    playAudio() {
        new Audio(this.state.audio).play();
    }
}