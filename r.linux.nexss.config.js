let languageConfig = Object.assign({}, require("./r.win32.nexss.config"));

languageConfig.compilers = {
  rscript: {
    install: "apt update && apt install -y r-base",
    command: "rscript",
    args: "--vanilla --slave <file>",
    help: ``,
  },
};

module.exports = languageConfig;
