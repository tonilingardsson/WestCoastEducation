import config from "../lib/util/config.js";

export default class HttpClient {
    #url = "";
    constructor() {
        this.#url = config.api.baseURL;
    }

    async get(resource, id = '') {
        try {
            const response = await fetch(`${this.#url}/${resource}/${id}`);

            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                throw new Error(
                    `Network response was not ok. Error: ${response.status} ${response.statusText}`
                );
            }
        } catch (error) {
            throw new Error(`Error fetching data from ${this.#url}`) + error;
        }
    }

    async add(data) {
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
                `Error fetching data from ${this.#url} with this error: ${error}`
            );
        }
    }

    async update(data) {
        try {
            const response = await fetch(`${this.#url}`, {
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
            throw new Error(`Error fetching data from ${this.#url}`) + error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(url, {
                method: "DELETE",
            });
        } catch (error) {
            throw new Error(`Error fetching data from ${this.#url}`) + error;
        }
    }
}
