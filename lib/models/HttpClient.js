export default class HttpClient {
    #url = "";
    constructor(url) {
        this.#url = url;
    }

    async get(resource, id = '') {

        const endpoint = `${this.#url}/${resource}/${id}`;

        try {
            const response = await fetch(endpoint);

            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                console.error(
                    `Network response was not ok. Error: ${response.status} ${response.statusText}`
                );
            }
        } catch (error) {
            console.error(`Error fetching data from ${endpoint}`) + error;
        }
    }

    async add(resource, data) {

        const endpoint = `${this.#url}/${resource}`;

        try {
            const response = await fetch(endpoint, {
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
                console.error(
                    `Network response was not ok. Error: ${response.status} ${response.statusText}`
                );
            }
        } catch (error) {
            console.log(error);
            console.error(
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
                console.error(
                    `Network response was not ok. Error: ${response.status} ${response.statusText}`
                );
            }
        } catch (error) {
            console.log(error);
            console.error(`Error fetching data from ${endpoint}`) + error;
        }
    }

    async delete(resource, id) {

        const endpoint = `${this.#url}/${resource}/${id}`;
        console.log(endpoint);

        await fetch('http://localhost:3000/courses/301', { method: "DELETE" });

        // try {
        //     const response = await fetch(endpoint, {
        //         method: "DELETE",
        //     });
        //     if (response.ok) {
        //         const result = await response.json();
        //         return result;
        //     } else {
        //         console.error(`Network response was not ok. Error:${response.status} ${response.statusText}`
        //         );

        //     }
        // } catch (error) {
        //     console.error(`Error fetching data from ${endpoint}`) + error;
        // }
    }
}
