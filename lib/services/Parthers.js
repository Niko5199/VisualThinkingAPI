const Reader = require("../utils/Reader");

class Parthers {
    static getAllVisualParthers() {
        const parthersVisual = Reader.readJSONVisualParthers("visualparthers.json");
        return parthersVisual;
    }
    static getAllVisualParthersEmail(haveCertification) {
        const parthersVisual = Reader.readJSONVisualParthers("visualparthers.json");
        return parthersVisual.filter(
            (parther) => String(parther.haveCertification) === haveCertification
        );
    }

    static getAllVisualParthersByCredist() {
        const parthersVisual = Reader.readJSONVisualParthers("visualparthers.json");
        return parthersVisual;
    }
}

module.exports = Parthers;
