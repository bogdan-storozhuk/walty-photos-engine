export default class PixbayService {
    _apiBase = 'https://pixabay.com/api';
    _apiKey = '17756679-c2c07b5492052af8ae388b0f5';
    getPhotos = async () => {
        const res = await fetch(`${this._apiBase}/?key=${this._apiKey}&q=${'blossom bloom flower'}&image_type=photo&
        per_page=${20}&safesearch=true`);

        if (!res.ok) {
            throw new Error(`Could not fetch /products` +
                `, received ${res.status}`)
        }
        return await res.json();
    }
}