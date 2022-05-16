const express = require("express");
const app = express();
const port = 5000;

const Parthers = require("./services/Parthers");

app.get("/", (_, response) => {
  response.json({ message: "visualParther Api welcome!" });
});

app.get("/v1/visualparthers", (_, response) => {
  const visualParthers = Parthers.getAllVisualParthers();
  response.json(visualParthers);
});

app.get("/v1/visualparthers/:haveCertification", (request, response) => {
  const { haveCertification } = request.params;
  const visualParthersEmail =
    Parthers.getAllVisualParthersEmail(haveCertification);
  response.json(visualParthersEmail);
});

app.get("/v1/visualparthers/:credits", (request, response) => {
  const visualPartherCredist = Parthers.getAllVisualParthersByCredist();
  response.json(request.params.credits);
});

app.listen(port, () => {
  console.log("API visualParthers in localhost:", port);
});
