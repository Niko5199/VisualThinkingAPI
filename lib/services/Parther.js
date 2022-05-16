const Reader = require("../utils/Reader");

class Parther {
    static getAllVisualParthers() {
        const parthersVisual = Reader.readJSONVisualParthers("visualparthers.json");
        return parthersVisual;
    }
    static getAllVisualParthersEmail(haveCertification) {
        const parthersVisual = Reader.readJSONVisualParthers("visualparthers.json");
        return parthersVisual.filter(
            parther => String(parther.haveCertification) === haveCertification
        );
    }

    static getAllVisualParthersByCredits() {
        const parthersVisual = Reader.readJSONVisualParthers("visualparthers.json");
        return parthersVisual.filter(parther => parther.credits >= 500);
    }
}

module.exports = Parther;
