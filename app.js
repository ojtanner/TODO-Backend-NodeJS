const app = require("express")();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

app.use(bodyParser.json());
app.use("/", require("./routes/routes"));

app.listen(3000, () => {
  console.log("Serving the tea");
});
