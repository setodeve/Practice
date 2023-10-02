from inetsetting import InetSetting
import json
from faker import Faker
class Client(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.2')
        self.server_address = '127.0.0.3'
        self.data = {
          "method": "valid",
          "params": {"str1": "abc","str2": "cba"}
        }

    def exectsend(self):
      fake = Faker()
      message = fake.name

      self.sock.bind(self.address)
      try:
        print('sending {!r}'.format(message))
        sent = self.sock.sendto(message.encode(), self.server_address)

        print('waiting to receive')
        data, server = self.sock.recvfrom(4096)
        print('received {!r}'.format(data.decode('utf-8')))

      finally:
        print('closing socket')
        self.sock.close()

client = Client()
client.exectsend