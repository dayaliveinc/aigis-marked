const marked = require("marked");

class MarkedCustomRenderer extends marked.Renderer {
  constructor(options = {}) {
    super(); // ES6 classes require calling super() if they extend another class
    this.md_class = options.md_class || DEFAULT_OPTIONS.md_class;
    const isHighlight =
      options.highlight === undefined
        ? DEFAULT_OPTIONS.highlight
        : options.highlight;
    const langPrefix =
      options.lang_prefix === undefined
        ? DEFAULT_OPTIONS.lang_prefix
        : options.lang_prefix;
    this._defineRenderer(this.md_class);
    this._enableSyntaxHighlight(isHighlight);
    this._setLangPrefix(langPrefix);
  }

  _defineRenderer(md_class) {
    for (const tagName of Object.keys(md_class)) {
      this[tagName] = require(`./md/${tagName}`);
    }
  }

  _enableSyntaxHighlight(flag) {
    if (flag) {
      marked.setOptions({ highlight: require("./highlight") });
    }
  }

  _setLangPrefix(langPrefix) {
    marked.setOptions({ langPrefix: langPrefix });
  }
}

module.exports = MarkedCustomRenderer;

const DEFAULT_OPTIONS = {
  md_class: {
    blockquote: "",
    heading: "",
    hr: "",
    list: "",
    listitem: "",
    paragraph: "",
    table: "",
    tablerow: "",
    tablecell: "",
    link: "",
    image: "",
  },
  highlight: true,
  lang_prefix: "language-",
};
