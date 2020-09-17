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

const {
  replaceCommandByDist,
  dist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

const distName = dist();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case "Alpine Linux":
    languageConfig.compilers.rscript.install = `${sudo}apk add build-base gcc wget R R-dev make`;
    break;
  case "Arch Linux":
    languageConfig.compilers.rscript.install = `${sudo}pacman -Sy --noconfirm gcc-fortran r make`;
    break;
  default:
    languageConfig.compilers.rscript.install = replaceCommandByDist(
      languageConfig.compilers.rscript.install
    );
    break;
}

module.exports = languageConfig;
