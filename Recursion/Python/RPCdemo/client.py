import sys
sys.dont_write_bytecode = True
from inetsetting import InetSetting
import json

class Client(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.2')
        self.server_address = '127.0.0.3'
        self.data = {
          "method": "floor",
          "params": 1.5
        }

    def data_receive(self):
      message = self.data
      sock = self.sock
      server_address = self.server_address

      try:
        print('sending {!r}'.format(message))
        sent = sock.sendto(json.dumps(message).encode(), server_address)
        print('waiting to receive')
        data, server = sock.recvfrom(4096)
        jsondata = json.loads(data.decode('utf-8'))
        print('received {!r}'.format(jsondata))

      finally:
        print('closing socket')
        sock.close()

client = Client()
client.address_unlink()
client.address_bind()
client.data_receive()
