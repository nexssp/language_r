let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "R";
languageConfig.description =
  "R is ‘GNU S’, a freely available language and environment for statistical computing and graphics which provides a wide variety of statistical and graphical techniques: linear and nonlinear modelling, statistical tests, time series analysis, classification, clustering, etc.";
languageConfig.url = "https://cran.r-project.org/";
languageConfig.extensions = [".r"];
languageConfig.builders = {};
languageConfig.compilers = {
  php7: {
    install: "scoop install r",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "rscript",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.r.errors");
languageConfig.languagePackageManagers = {
  npm: {
    //tODO r package manager
    installation: "PowerShell.exe -File installComposer.ps1",
    messageAfterInstallation:
      "Add to the top of your php file(s): require __DIR__ . '/vendor/autoload.php';", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "composer installed <args>",
    search: "composer search <args>",
    install: "composer require <args>",
    uninstall: "composer remove <args>",
    help: "composer <args>",
    version: "composer version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "composer <default> <args>"
  }
};

module.exports = languageConfig;
