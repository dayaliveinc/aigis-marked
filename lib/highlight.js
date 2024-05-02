var fs = require("fs");
var path = require("path");
var _ = require("lodash");

//var prismCore = "prismjs/components/prism-core";
var Prism = require("prismjs");
const loadLanguages = require("prismjs/components/");

loadLanguages(["html", "clike", "javascript", "markup", "c", "ruby", "css"]);

module.exports = function highlight(code, lang) {
  var lang = lang || "";
  switch (lang) {
    case "hbs":
    case "ejs":
      lang = "html";
      break;
    case "js":
      lang = "javascript";
      break;
  }
  var language = Prism.languages[lang] || Prism.languages.autoit;
  var html = Prism.highlight(code, language);
  return html;
};
