export default class PixbayApi {
  _apiBase = 'https://pixabay.com/api';
  _apiKey = '17756679-c2c07b5492052af8ae388b0f5';

  getPhotos = async (tags) => {
    const tagsURL = tags.reduce((sum, current) => {
      return sum + `${current.name} `;
    }, '');
    const res = await fetch(`${this._apiBase}/?key=${this._apiKey}&q=${tagsURL}
    &image_type=photo&per_page=${20}&safesearch=true`);
    return await res.json();
  };
}
