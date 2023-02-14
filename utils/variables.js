import Form from "../components/form.js";
import WordRender from "../components/wordRender.js";
import Theme from "../components/theme.js";
import ToggleClasses from "../components/toggleClasses.js";
import DictionaryAPI from "../components/DictionaryAPI.js";

export const selectors = {
  form: ".search-form",
  input: ".search-form__input",
  svgWrapper: ".theme__wrapper",
  templateWordHeader: ".template__word-header",
  templateWordPartOfSpeech: ".template__part-of-speech",
  word: ".word__target",
  partOfSpeechContainer: "word__part-of-speech",
  speech: ".word__speech",
  wordContainer: ".word__container",
  wordMeaning: ".word__meaning",
  wordExample: ".word__example",
  wordSource: ".word__source",
  wordSynonyms: ".word__synonyms",
  wordHeader: ".word__header",
  phonetic: ".word__phonetic",
  wordText: ".word__text",
  audioBtn: ".word__audio-btn",
  url: "https://api.dictionaryapi.dev/api/v2/entries/en/",
};

export const themeBtn = document.querySelector(".theme__btn");
export const svgWrapper = document.querySelector(".theme__wrapper");
export const body = document.querySelector(".body");
export const logo = document.querySelector(".logo__svg");
export const inputSearch = document.querySelector(".search-form__input");

export const LIGHT_THEME = "light";
export const DARK_THEME = "dark";

export const sunSvg = `
    <svg
    class="theme__icon theme__icon_type_sun"
    width="50" height="50"
    viewBox="0 0 50 50"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M24.9063 3.96875C24.8633 3.97656 24.8203 3.98828 24.7813 4C24.3164 4.10547 23.9883 4.52344 24 5V11C23.9961 11.3594 24.1836 11.6953 24.4961 11.8789C24.8086 12.0586 25.1914 12.0586 25.5039 11.8789C25.8164 11.6953 26.0039 11.3594 26 11V5C26.0117 4.71094 25.8945 4.43359 25.6875 4.23828C25.4766 4.03906 25.1914 3.94141 24.9063 3.96875ZM10.6563 9.84375C10.2813 9.91016 9.98049 10.1836 9.87502 10.5469C9.76955 10.9141 9.87893 11.3047 10.1563 11.5625L14.4063 15.8125C14.6485 16.1094 15.0352 16.2461 15.4102 16.1602C15.7813 16.0742 16.0742 15.7813 16.1602 15.4102C16.2461 15.0352 16.1094 14.6484 15.8125 14.4063L11.5625 10.1563C11.3555 9.9336 11.0547 9.82032 10.75 9.84376C10.7188 9.84376 10.6875 9.84375 10.6563 9.84375ZM39.0313 9.84375C38.8047 9.875 38.5938 9.98828 38.4375 10.1562L34.1875 14.4062C33.8907 14.6484 33.7539 15.0352 33.8399 15.4102C33.9258 15.7813 34.2188 16.0742 34.5899 16.1602C34.9649 16.2461 35.3516 16.1094 35.5938 15.8125L39.8438 11.5625C40.1563 11.2656 40.2461 10.8008 40.0625 10.4102C39.875 10.0156 39.461 9.78907 39.0313 9.84375ZM24.9063 15C24.875 15.0078 24.8438 15.0195 24.8125 15.0312C24.75 15.0352 24.6875 15.0469 24.625 15.0625C24.6133 15.0742 24.6055 15.082 24.5938 15.0938C19.2891 15.3203 15 19.6406 15 25C15 30.5039 19.4961 35 25 35C30.5039 35 35 30.5039 35 25C35 19.6602 30.7461 15.3555 25.4688 15.0938C25.4336 15.0938 25.4102 15.0625 25.375 15.0625C25.2735 15.0234 25.168 15.0039 25.0625 15C25.043 15 25.0196 15 25 15C24.9688 15 24.9375 15 24.9063 15ZM24.9375 17C24.9571 17 24.9805 17 25 17C25.0313 17 25.0625 17 25.0938 17C29.4688 17.0508 33 20.6133 33 25C33 29.4219 29.4219 33 25 33C20.5821 33 17 29.4219 17 25C17 20.6016 20.5469 17.0352 24.9375 17ZM4.71877 24C4.16799 24.0781 3.78127 24.5898 3.8594 25.1406C3.93753 25.6914 4.44924 26.0781 5.00003 26H11C11.3594 26.0039 11.6953 25.8164 11.8789 25.5039C12.0586 25.1914 12.0586 24.8086 11.8789 24.4961C11.6953 24.1836 11.3594 23.9961 11 24H5.00003C4.96878 24 4.93753 24 4.90628 24C4.87503 24 4.84378 24 4.81253 24C4.78128 24 4.75002 24 4.71877 24ZM38.7188 24C38.168 24.0781 37.7813 24.5898 37.8594 25.1406C37.9375 25.6914 38.4492 26.0781 39 26H45C45.3594 26.0039 45.6953 25.8164 45.8789 25.5039C46.0586 25.1914 46.0586 24.8086 45.8789 24.4961C45.6954 24.1836 45.3594 23.9961 45 24H39C38.9688 24 38.9375 24 38.9063 24C38.875 24 38.8438 24 38.8125 24C38.7813 24 38.75 24 38.7188 24ZM15 33.875C14.7735 33.9062 14.5625 34.0195 14.4063 34.1875L10.1563 38.4375C9.8594 38.6797 9.72268 39.0664 9.80861 39.4414C9.89455 39.8125 10.1875 40.1055 10.5586 40.1914C10.9336 40.2774 11.3203 40.1406 11.5625 39.8438L15.8125 35.5938C16.1094 35.3086 16.1992 34.8672 16.0391 34.4883C15.8828 34.1094 15.5039 33.8672 15.0938 33.875C15.0625 33.875 15.0313 33.875 15 33.875ZM34.6875 33.875C34.3125 33.9414 34.0117 34.2148 33.9063 34.5781C33.8008 34.9453 33.9102 35.3359 34.1875 35.5938L38.4375 39.8438C38.6797 40.1406 39.0664 40.2774 39.4414 40.1914C39.8125 40.1055 40.1055 39.8125 40.1914 39.4414C40.2774 39.0664 40.1406 38.6797 39.8438 38.4375L35.5938 34.1875C35.4063 33.9883 35.1485 33.8789 34.875 33.875C34.8438 33.875 34.8125 33.875 34.7813 33.875C34.75 33.875 34.7188 33.875 34.6875 33.875ZM24.9063 37.9688C24.8633 37.9766 24.8203 37.9883 24.7813 38C24.3164 38.1055 23.9883 38.5234 24 39V45C23.9961 45.3594 24.1836 45.6953 24.4961 45.8789C24.8086 46.0586 25.1914 46.0586 25.5039 45.8789C25.8164 45.6953 26.0039 45.3594 26 45V39C26.0117 38.7109 25.8945 38.4336 25.6875 38.2383C25.4766 38.0391 25.1914 37.9414 24.9063 37.9688Z" />
    </svg>`;
export const moonSvg = `
    <svg
    class="theme__icon theme__icon_type_moon"
    width="50" height="50"
    viewBox="0 0 50 50"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M15.9063 5.96875C15.8633 5.97656 15.8203 5.98828 15.7813 6C15.3164 6.10547 14.9883 6.52344 15 7V8H14C13.9688 8 13.9375 8 13.9063 8C13.3555 8.02734 12.9258 8.49609 12.9531 9.04688C12.9805 9.59766 13.4492 10.0274 14 10H15V11C14.9961 11.3594 15.1836 11.6953 15.4961 11.8789C15.8086 12.0586 16.1914 12.0586 16.5039 11.8789C16.8164 11.6953 17.0039 11.3594 17 11V10H18C18.3594 10.0039 18.6953 9.81642 18.8789 9.50392C19.0586 9.19142 19.0586 8.80861 18.8789 8.49611C18.6953 8.18361 18.3594 7.99611 18 8.00002H17V7.00002C17.0117 6.71096 16.8945 6.43361 16.6875 6.2383C16.4766 6.03908 16.1914 5.94141 15.9063 5.96875ZM28.3125 12.9688L27 13.1563C20.2188 14.125 15 19.957 15 27C15 34.7188 21.2813 41 29 41C36.043 41 41.8711 35.7813 42.8438 29L43.0313 27.6875L41.7188 27.875C41.1367 27.957 40.5664 28 40 28C33.3594 28 28 22.6406 28 16C28 15.4336 28.043 14.8633 28.125 14.2813L28.3125 12.9688ZM26.0313 15.5313C26.0235 15.6914 26 15.8359 26 16C26 23.7188 32.2813 30 40 30C40.1641 30 40.3086 29.9766 40.4688 29.9688C39.1289 35.1328 34.5899 39 29 39C22.3594 39 17 33.6406 17 27C17 21.4102 20.8672 16.8672 26.0313 15.5313ZM7.90626 17.9688C7.86329 17.9766 7.82032 17.9883 7.78126 18C7.31642 18.1055 6.98829 18.5234 7.00001 19C6.96876 19 6.93751 19 6.90626 19C6.35548 19.0273 5.92579 19.4961 5.95314 20.0469C5.98048 20.5977 6.44923 21.0274 7.00002 21C6.99611 21.3594 7.18361 21.6953 7.49611 21.8789C7.80861 22.0586 8.19142 22.0586 8.50392 21.8789C8.81642 21.6953 9.00392 21.3594 9.00001 21C9.35939 21.0039 9.69532 20.8164 9.87892 20.5039C10.0586 20.1914 10.0586 19.8086 9.87892 19.4961C9.69533 19.1836 9.35939 18.9961 9.00001 19C9.01173 18.711 8.89454 18.4336 8.68751 18.2383C8.47657 18.0391 8.19142 17.9414 7.90626 17.9688Z" />
    </svg>`;

export const theme = new Theme(selectors);
export const toggleClasses = new ToggleClasses();
export const form = new Form(selectors);
export const dictionaryapi = new DictionaryAPI(selectors);
export const wordRender = new WordRender(selectors);
