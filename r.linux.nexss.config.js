let languageConfig = Object.assign({}, require("./r.win32.nexss.config"));
let sudo = "";
if (process.getuid && process.getuid() === 0) {
  sudo = "sudo ";
}
languageConfig.compilers = {
  rscript: {
    install: `${sudo}apt install -y r-base`,
    command: "rscript",
    args: "--vanilla --slave <file>",
    help: ``,
  },
};

module.exports = languageConfig;
