let languageConfig = Object.assign({}, require("./r.win32.nexss.config"));

languageConfig.compilers = {
  rscript: {
    install: "brew install r",
    command: "Rscript",
    args: "--vanilla --slave <file>",
    help: ``,
  },
};

module.exports = languageConfig;
