import config from "../lib/util/config.js";

export default class HttpClient {
    #url = "";
    constructor() {
        this.#url = config.api.baseURL;
    }

    async get(resource, id = '') {

        const endpoint = `${this.#url}/${resource}/${id}`;

        try {
            const response = await fetch(endpoint);

            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                throw new Error(
                    `Network response was not ok. Error: ${response.status} ${response.statusText}`
                );
            }
        } catch (error) {
            throw new Error(`Error fetching data from ${endpoint}`) + error;
        }
    }

    async add(resource, data) {

        const endpoint = `${this.#url}/${resource}`;

        try {
            const response = await fetch(this.#url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                throw new Error(
                    `Network response was not ok. Error: ${response.status} ${response.statusText}`
                );
            }
        } catch (error) {
            console.log(error);
            throw new Error(
                `Error fetching data from ${endpoint} with this error: ${error}`
            );
        }
    }

    async update(resource, id, data) {

        const endpoint = `${this.#url}/${resource}/${id}`;


        try {
            const response = await fetch(endpoint, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                throw new Error(
                    `Network response was not ok. Error: ${response.status} ${response.statusText}`
                );
            }
        } catch (error) {
            console.log(error);
            throw new Error(`Error fetching data from ${endpoint}`) + error;
        }
    }

    async delete(resource, id) {

        const endpoint = `${this.#url}/${resource}/${id}`;

        try {
            const response = await fetch(endpoint, {
                method: "DELETE",
            });
        } catch (error) {
            throw new Error(`Error fetching data from ${endpoint}`) + error;
        }
    }
}
