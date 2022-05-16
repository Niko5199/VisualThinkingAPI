const Parther = require("../services/Parther");

class PartherController {
  static getAllVisualParthers() {
    return Parther.getAllVisualParthers();
  }
  static getAllVisualParthersByEmail(haveCertification) {
    return Parther.getAllVisualParthersByCredits(haveCertification);
  }
  static getAllVisualParthersByCredits() {
    return Parther.getAllVisualParthersByCredits();
  }
}

module.exports = PartherController;
