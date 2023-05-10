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