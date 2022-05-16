const fs = require("fs");

class Reader {
    static readJSONVisualParthers(path) {
        const visualParther = fs.readFileSync(path);
        return JSON.parse(visualParther);
    }
}

module.exports = Reader;
