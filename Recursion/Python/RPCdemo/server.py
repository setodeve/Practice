import sys
sys.dont_write_bytecode = True
from inetsetting import InetSetting
import json
import math
class Server(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.3')

    def floor_number(self,num):
       data = {
          "results":int(math.floor(num)),
          "type":"int"
       }
       return json.dumps(data).encode()
    
    def nroot_number(self,num,time):
      data = {
         "results":num**time,
         "type":"int"
      }
      return json.dumps(data).encode()

    def reverse_string(self,str):
      data = {
         "results":str[::-1],
         "type":"string"
      }
      return json.dumps(data).encode()
    
    def validAnagram_string(self,str1,str2):
      data = {
         "results":False,
         "type":"Bool"
      }
      
      if(len(str1)!=len(str2)):
         print("length no match")
      else:
         for i in range(int(len(str1)/2)):
            if(str1[i]!=str2[len(str2)-i-1]):
               data["results"] = False
               break
            else:
               data["results"] = True
     
      return json.dumps(data).encode()
    
    def sort_arr(self,arr):
      arr.reverse()
      data = {
         "results":arr,
         "type":"string"
      }
      return json.dumps(data).encode()
    
    def select_methods(self,method,params):
       if method=="floor":
          return self.floor_number(params)
       elif method=="nroot":
          return self.nroot_number(params["num"],params["time"])
       elif method=="reverse":
          return self.reverse_string(params)
       elif method=="sort":
          return self.sort_arr(params)
       elif method=="valid":
          return self.validAnagram_string(params["str1"],params["str2"])
       else:
          return json.dumps({}).encode()

    def data_receive(self):
      sock = self.sock
      
      while True:
        print('\nwaiting to receive message')
        recvjsondata, address = sock.recvfrom(4096)
        recvdata = json.loads(recvjsondata.decode('utf-8'))
        
        print('received {} from {}'.format(len(recvdata), address))
        print('{!r}'.format(recvdata))

        sendjsondata = self.select_methods(recvdata["method"],recvdata["params"])
        senddata = json.loads(sendjsondata.decode('utf-8'))
        
        if senddata:
            sent = sock.sendto(sendjsondata, address)
            print('sent {} bytes back to {}'.format(sent, address))

server = Server()
server.address_unlink()
server.address_bind()
server.data_receive()