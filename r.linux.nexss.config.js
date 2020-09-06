let languageConfig = Object.assign({}, require("./r.win32.nexss.config"));
let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}
languageConfig.compilers = {
  rscript: {
    install: `${sudo}apt install -y r-base`,
    command: "Rscript",
    args: "--vanilla --slave <file>",
    help: ``,
  },
};

module.exports = languageConfig;
