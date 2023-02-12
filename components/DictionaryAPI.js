import { wordRender } from "../utils/variables.js";

export class DictionaryAPI {
    constructor() {
        this._url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    }

    fetchWord(word) {
        fetch(`${this._url}${word}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Fetch failed: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            if (data.length) {
                wordRender.render();
            } else {
                throw new Error('No data was returned from the server');
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }
}