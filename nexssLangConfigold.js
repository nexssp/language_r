module.exports = {
  description: "Rscript",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "RScript",
  extension: ".r",
  editors: {
    win32: "C:/program files/RStudio/bin/rstudio.exe <script>",
    darwin: "nexss install ahk <package>",
    linux: "nexss install ahk <package>"
  },
  errors: {
    "Uncaught Error: Class '(.*?)'": {
      win32: "nexss install ahk <package>",
      darwin: "nexss install ahk <package>",
      linux: "nexss install ahk <package>"
    },
    "'RScript'": {
      win32: "scoop install r",
      darwin: "brew install r",
      linux: "apt-get install r -y"
    }
  },
  url: ""
};
