import { compile } from "json-schema-to-typescript";
import * as path from "path";
import * as fs from "fs";

const jsonSchema = require("./schema.json");

if (!fs.existsSync("lib")) {
  fs.mkdirSync("lib");
}

const outputFilePath = path.resolve(__dirname, "../lib/index.d.ts");

compile(jsonSchema, "OpenAPI", {
  bannerComment: "",
  style: {
    endOfLine: "lf",
    tabWidth: 2,
    useTabs: false
  }
}).then(value => fs.writeFileSync(outputFilePath, value, "utf8"));
