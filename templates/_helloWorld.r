#!/usr/bin/env Rscript

if (!requireNamespace("rjson", quietly = TRUE))
    install.packages("rjson", repos = "http://cran.us.r-project.org")

library("rjson")

f <- file("stdin")
open(f)

while(length(line <- readLines(f,n=1)) > 0) {
  NexssStdout <- fromJSON(toString(line))
#   NexssStdout["HelloFromR"] = paste0(R.Version()[c("major","minor")], collapse = ".")
  
  rVersion = paste(R.Version()$major,".",R.Version()$minor, sep="")
  NexssStdout$HelloFromR = rVersion  
  
  cat( toJSON( NexssStdout ))
  # process line
}