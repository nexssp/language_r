let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "R";
languageConfig.description =
  "R is ‘GNU S’, a freely available language and environment for statistical computing and graphics which provides a wide variety of statistical and graphical techniques: linear and nonlinear modelling, statistical tests, time series analysis, classification, clustering, etc.";
languageConfig.url = "https://cran.r-project.org/";
languageConfig.founders = ["George Ross Ihaka", "Robert Gentleman"];
languageConfig.developers = ["R Core Team"];
languageConfig.years = ["1993"];
languageConfig.extensions = [".r"];
languageConfig.builders = {};
// English errors
process.env["language"] = "EN";

languageConfig.compilers = {
  rscript: {
    install: "scoop install r",
    uninstall: "scoop uninstall r",
    command: "rscript",
    shell: "R.exe",
    args: "--vanilla --slave <file>",
    help: ``,
  },
  rtools: {
    install: "scoop install r rtools",
    uninstall: "scoop uninstall r rtools",
    command: "rscript",
    shell: "R.exe",
    args: "--vanilla --slave <file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.r.errors");
languageConfig.languagePackageManagers = {
  rscript: {
    //tODO r package manager
    installation: "",
    messageAfterInstallation: "", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: `Rscript -e 'str(installed.packages(.Library, priority = "high"))'`,
    search: "composer search",
    // install: `Rscript -e 'install.packages("<PackageName>", repos="http://cran.us.r-project.org")'"`,
    install: function (args) {
      const command = `Rscript -e "install.packages('${args}', repos='http://cran.us.r-project.org')"`;
      require("child_process").execSync(command, { stdio: "inherit" });
      // console.log(languageConfig);
      return;
    },
    installSource: function (args) {
      const command = `Rscript -e "install.packages('${args}', repo=NULL, type='source')"`;
      require("child_process").execSync(command, { stdio: "inherit" });
    },
    installGithub: function (args) {
      const command = `Rscript -e "devtools::install_github('${args}')"`;
      require("child_process").execSync(command, { stdio: "inherit" });
    },
    uninstall: `Rscript -e 'uninstall.packages("<PackageName>")'`,
    help: "",
    version: "RScript --version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "RScript",
  },
};

module.exports = languageConfig;
