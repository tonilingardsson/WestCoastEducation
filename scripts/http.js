// Michael creates the class HttpClient to be used in other files.
// This file is always the same.
export default class HttpClient {
// A private field
#url = '';
constructor(url) {
    this.#url = url;
}
    
// Here we create all the methods we need to be able to manage CRUD operations

// Method to READ data from a database: GET
async get() {
    try {    // Get data from db.json. The process will be asynchronous
        // Trying to contact our API endpoint
        const response = await fetch(this.#url);

        if (response.ok) {
            // If everything goes well, return the data
            const result = await response.json();
            return result;
        }
        else {
            throw new Error(`Network response was not ok. Error: ${response.status} ${response.statusText}`);
        }
    }
    catch (error) {
        throw new Error(`Error fetching data from ${this.#url}`) + error;
    }
}
// Method to CREATE data from a database: POST

async add(data) {
    try {
        const response = await fetch(this.#url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        else {
            throw new Error(`Network response was not ok. Error: ${response.status} ${response.statusText}`);
        }
    }
    catch (error) {
        console.log(error);
        throw new Error(`Error fetching data from ${this.#url} with this error: ${error}`);
    }
}

// Method to UPDATE data from a database: PUT
async update(id, data) {
    try {
        const response = await fetch(`${this.#url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        else {
            throw new Error(`Network response was not ok. Error: ${response.status} ${response.statusText}`);
        }
    }
    catch (error) {
        console.log(error);
        throw new Error(`Error fetching data from ${this.#url}`) + error;
    }
}

// Method to DELETE data from a database: DELETE. Add an alert to the user, to confirm the deletion
async delete(id) {
    try {
        const response = await fetch(this.#url, {
            method: 'DELETE'
        });
    }
    catch (error) {
        console.log(error);
        throw new Error(`Error fetching data from ${this.#url}`) + error;
    }
}

}