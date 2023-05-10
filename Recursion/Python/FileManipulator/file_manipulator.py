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