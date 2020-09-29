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
  case os.distros.AMAZON:
    languageConfig.compilers.rscript.install = `${sudo}amazon-linux-extras enable R3.4
${sudo}yum install -y install procps R`;
    break;
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
    const v = os.v() * 1;
    if (v >= 8) {
      languageConfig.compilers.rscript.install = `${sudo}dnf install -y oracle-epel-release-el8 R.*`;
    } else {
      languageConfig.compilers.rscript.install = `${sudo}yum install -y oracle-epel-release-el7 R.*`;
    }
    break;
  case os.distros.FEDORA:
    languageConfig.compilers.rscript.install = `${sudo}dnf install -y R-core R-devel`;
    break;
  default:
    languageConfig.compilers.rscript.install = os.replacePMByDistro(
      languageConfig.compilers.rscript.install
    );
    break;
}

module.exports = languageConfig;
