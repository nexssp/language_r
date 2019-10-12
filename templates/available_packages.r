a <- available.packages()
head(rownames(a), 3)  ## Show the names of the first few packages

## installs pacakge

install.packages("slidify") 
#OR
install.packages(c("slidify", "ggplot2", "devtools"))

# Install bioconductor

if (!requireNamespace("BiocManager", quietly = TRUE))
    install.packages("BiocManager")
BiocManager::install()

BiocManager::install(c("GenomicFeatures", "AnnotationDbi"))
BiocManager::available()

#Recompile
if (!requireNamespace("BiocManager", quietly = TRUE))
    install.packages("BiocManager")
pkgs <- rownames(installed.packages())
BiocManager::install(pkgs, type = "source", checkBuilt = TRUE)