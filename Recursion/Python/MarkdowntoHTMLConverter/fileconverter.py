import sys
import markdown

def fileconvert(mdfile,htmlfile):
    md = open(mdfile,"r")
    htmldata = markdown.markdown(md.read())
    html = open(htmlfile,"w")
    html.write(htmldata)
    md.close()
    html.close()

if(sys.argv[1] == "fileconvert"):
    fileconvert(sys.argv[2],sys.argv[3])