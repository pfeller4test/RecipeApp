/**
 * A re-usable rest client for consistently making requests to REST APIs.
 */
 class RestClient {
    /**
     * @constructor
     * @param {string} baseUrl The base url for this rest client.
     */
    constructor(baseUrl) {
      /**
       * The base URL. Typically this is everything that comes before the first slash after the domain.com part.
       * 
       * ex: https://www.google.com/ of https://www.google.com/search?q=asdf
       */
      this.baseUrl = baseUrl;
    }
  
    /**
     * Performs a GET request against a given url.
     * @param {string} route The route portion of the URL.
     * @returns {any} The response object as JSON from the server.
     */
    async Get(route) {
      const path = `${this.baseUrl}${route}`;
      try {
        console.debug(`making request to: [${path}].`);
        const response = await fetch(path);
        return await response.json();
      } catch (err) {
        console.error(err);
      }
    };
  
    /**
     * Performs a POST request against a given url.
     * @param {string} route The route portion of the URL.
     * @param {any} body The data to be sent as the body of this POST request.
     * @returns {any} The response object as JSON from the server.
     */
    async Post(route, body) {
      const path = `${this.baseUrl}${route}`;
      const options = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      };
      try {
        const response = await fetch(path, options);
        return await response.json();
      } catch (err) {
        console.error(err);
      }
    };
  
    /**
     * Performs a PUT request against a given url.
     * @param {string} route The route portion of the URL.
     * @param {any} body The data to be sent as the body of this PUT request.
     * @returns {any} The response object as JSON from the server (if any).
     */
    async Put(route, body) {
      const path = `${this.baseUrl}${route}`;
      const options = {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      };
      try {
        const response = await fetch(path, options);
        return await response.json();
      } catch (err) {
        console.error(err);
      }
    };
  };