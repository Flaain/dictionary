import { wordRender } from "../utils/variables.js";

export default class DictionaryAPI {
  constructor(selectors) {
    this._url = selectors.url;
  }

  get url() {
    return this._url;
  }

  set url(value) {
    return (this._url = value);
  }

  fetchWord(word) {
    fetch(`${this.url}${word}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetch failed: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.length) {
          wordRender.render(data);
        } else {
          throw new Error("No data was returned from the server");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
