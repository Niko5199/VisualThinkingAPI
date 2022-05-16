const express = require("express");
const app = express();
const port = 3000;

const PartherController = require("./controllers/PartherController");

app.get("/", (_, response) => {
    response.json({ message: "visualParther Api welcome!" });
});

app.get("/v1/students/", (_, response) => {
    response.json(PartherController.getAllVisualParthers());
});

app.get("/v1/students/credits", (_, response) => {
    response.json(PartherController.getAllVisualParthersByCredits());
});

app.get("/v1/students/:haveCertification", (request, response) => {
    const { haveCertification } = request.params;
    response.json(
        PartherController.getAllVisualParthersByEmail(haveCertification)
    );
});

app.listen(port, () => {
    console.log("API visualParthers in localhost:", port);
});
