class NameDB {
    constructor() {
        this.idCounter = 4;
        this.names = [
            { id: 1, fName: "Homer", lName: "Simpson" },
            { id: 2, fName: "Marge", lName: "Simpson" },
            { id: 3, fName: "Lisa", lName: "Simpson" },
            { id: 4, fName: "Ned", lName: "Flanders" }
        ];
    }

    // CREATE
    addName(data) {
        return new Promise((resolve, reject) => {
            this.idCounter++;
            data.id = this.idCounter;
            this.names.push(data);
            resolve();
        });
    }

    // READ
    getAllNames() {
        return new Promise((resolve, reject) => {
            resolve(this.names);
        });
    }

    getNamesById(id) {
        return new Promise((resolve, reject) => {
            let name = this.names.find(name => name.id == id);

            if (name) { // name was found
                resolve(name);
            } else { // name was not found / undefined
                reject("Name not found");
            }
        });
    }

    // UPDATE
    updateNameById(id, data) {
        return new Promise((resolve, reject) => {
            let nameIndex = this.names.findIndex(name => name.id == id);

            if (nameIndex != -1) { // name was found
                data.id = +id; // convert id parameter to number and assign to id
                this.names[nameIndex] = data;
                resolve();
            } else {
                reject("Name not found");
            }
        });
    }

    // DELETE
    deleteNameById(id, data) {
        return new Promise((resolve, reject) => {
            let nameIndex = this.names.findIndex(name => name.id == id);

            if (nameIndex != -1) { // name was found
                this.names.splice(nameIndex, 1);
                resolve();
            } else {
                reject("Name not found");
            }
        });
    }
}

module.exports = NameDB;