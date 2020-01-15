#!/usr/bin/env Rscript

if (!requireNamespace("rjson", quietly = TRUE))
    install.packages("rjson", repos = "http://cran.us.r-project.org")

library("rjson")

f <- file("stdin")
open(f)

while(length(line <- readLines(f, n=1, warn=FALSE)) > 0) {
  NexssStdout <- fromJSON(toString(line))
  
#   rVersion = paste(R.Version()$major,".",R.Version()$minor, sep="")
#   NexssStdout$HelloFromR = rVersion  

  NexssStdout$test = "test"  
  
  cat( toJSON( NexssStdout ))
  # process line
}