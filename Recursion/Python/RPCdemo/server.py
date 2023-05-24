import sys
sys.dont_write_bytecode = True
from inetsetting import InetSetting
import json
import math
class Server(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.3')

    def data_receive(self):
      sock = self.sock
      
      while True:
        print('\nwaiting to receive message')
        recvjsondata, address = sock.recvfrom(4096)
        recvdata = json.loads(recvjsondata.decode('utf-8'))
        
        print('received {} from {}'.format(len(recvdata), address))
        print('{!r}'.format(recvdata))
        data = {
          "results":int(math.floor(recvdata["params"])),
          "type":"int"
        }
        sendjsondata = json.dumps(data).encode()
        # sendjsondata = self.select_methods(recvdata["method"],recvdata["params"])
        senddata = json.loads(sendjsondata.decode('utf-8'))
        
        if senddata:
            sent = sock.sendto(sendjsondata, address)
            print('sent {} bytes back to {}'.format(sent, address))

    # def floor_number(num):
    #    data = {
    #       "results":int(math.floor(num)),
    #       "type":"int"
    #    }
    #    return json.dumps(data).encode()
    
    # def select_methods(self,str,params):
    #    if str=="floor":
    #       return self.floor_number(params)
    #    else:
    #       return json.dumps({}).encode()

server = Server()
server.address_unlink()
server.address_bind()
server.data_receive()