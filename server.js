var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

import webpack from "webpack";
import config from "./webpack.config.dev.js";

const port = 3000;
const app = express();

const compiler = webpack(config);

let heizung = {
  areaSautter: {
    wochentage: {
      montag: [
        {
          id: "",
          an: "10:00",
          aus: "12:00"
        },
        {
          id: "",
          an: "19:00",
          aus: "18:00"
        },
        {
          id: "",
          an: "22:00",
          aus: "20:00"
        }
      ],
      dienstag: [],
      mittwoch: [],
      donnerstag: [],
      freitag: [],
      samstag: [],
      sonntag: []
    },
    partygeneral: { partyMode: false, generalMode: true }
  },
  test: {
    wochentage: {
      montag: [
        {
          id: "",
          an: "10:00",
          aus: "12:00"
        }
      ],
      dienstag: [
        {
          id: "",
          an: "10:00",
          aus: "12:00"
        }
      ],
      mittwoch: [],
      donnerstag: [],
      freitag: [],
      samstag: [],
      sonntag: []
    },
    partygeneral: { partyMode: false, generalMode: true }
  }
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./src/index.html"));
});

app.get("/data/heizung", function(req, res) {
  const wohnung = req.query.wohnung;
  res.send(heizung[wohnung]);
});

app.post("/data/heizung/save", function(req, res) {
  heizung = req.body;
  res.send(heizung);
});

app.listen(port, function(error) {
  if (error) {
    console.log(error);
  }
  console.log(`server started on port ${port}`);
});
