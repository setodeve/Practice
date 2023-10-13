from inetsetting import InetSetting
import json

class Client(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.2',1234)
        self.server_address = '127.0.0.3'
        self.data = {
          "method": "valid",
          "params": {"str1": "abc","str2": "cba"}
        }

    def exectsend(self)-> None:
      # self.address_bind()
      while True:
        try:
          print('Input any messages, Type [end] to exit')
          message = input()
          if message != 'end':
            print('sending {!r}'.format(message))
            sent = self.sock.sendto(message.encode(), (self.server_address,self.port))

            print('waiting to receive')
            data, server = self.sock.recvfrom(4096)
            print('received {!r}'.format(data.decode('utf-8')))
          else:
            print('closing socket')
            self.sock.close()

        finally:
          print('closing socket')
          self.sock.close()

client = Client()
client.exectsend()