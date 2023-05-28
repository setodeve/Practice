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
       print(data)
       return json.dumps(data).encode()
    
    def select_methods(self,method,params):
       if method=="floor":
          return self.floor_number(params)
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