class ZipService {
  constructor() {
    this.baseUrl = "http://api.zippopotam.us/us/";
  }

  async getLocation(zip) {
    try {
      const url = `${this.baseUrl}${zip}`;
      const response = await fetch(url);
      const zipInfo = await response.json();
      const city = zipInfo.places[0]["place name"];
      const state = zipInfo.places[0]["state abbreviation"];
      return `${city}, ${state}`;
    } catch (error) {
      console.error("ZIP code error:", error);
    }
  }
}

export default ZipService;
