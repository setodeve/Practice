import shutil

def reverse(inputpath,outputpath):
  file = open(inputpath,'r')
  fileb = open(outputpath,'w')
  print(fileb.write(''.join(list(reversed(file.readline())))))
  file.close()
  fileb.close()

# reverse("./input/test.txt","./output/test.txt")

def copy(inputpath,outputpath):
  shutil.copyfile(inputpath, outputpath)

# copy("./input/test.txt","./output/test.txt")

def duplicatecontents(inputpath,n):
  file = open(inputpath,'r')
  data = file.read()
  file.close()
  file = open(inputpath,'a')
  if(n!=0):
    for i in range(n):
      file.write(data)
  file.close()

# duplicatecontents("./input/test.txt",2)

def replacestring(inputpath,oldstring,newstring):
  filedata = open(inputpath,'r').read()
  open(inputpath, 'w').close()
  file = open(inputpath,'w')
  file.write(filedata.replace(oldstring,newstring))
  file.close()

# replacestring("./input/test.txt","test","new")