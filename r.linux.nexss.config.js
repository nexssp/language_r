let languageConfig = Object.assign({}, require("./r.win32.nexss.config"));
const os = require("@nexssp/os");
let sudo = os.sudo();

languageConfig.compilers = {
  rscript: {
    install: `${sudo}apt install -y r-base`,
    command: "Rscript",
    args: "--vanilla --slave <file>",
    help: ``,
  },
};

const distName = os.name();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case os.distros.SUSE_LEAP:
  case os.distros.SUSE_TUMBLEWEED:
    languageConfig.compilers.rscript.install = `${sudo}zypper -n install R-base npm`;
    break;
  case os.distros.ALPINE:
    languageConfig.compilers.rscript.install = `${sudo}apk add build-base gcc wget R R-dev make`;
    break;
  case os.distros.ARCH:
    languageConfig.compilers.rscript.install = `${sudo}pacman -Sy --noconfirm gcc-fortran r make`;
    break;
  case os.distros.ORACLE:
    languageConfig.compilers.rscript.install = `${sudo}yum --enablerepo=rhel-optional install -y R`;
    break;
  default:
    languageConfig.compilers.rscript.install = replaceCommandByDist(
      languageConfig.compilers.rscript.install
    );
    break;
}

module.exports = languageConfig;
