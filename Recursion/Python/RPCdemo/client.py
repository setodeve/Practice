from inetsetting import InetSetting

class Client(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.2')
        self.server_address = '127.0.0.3'

    def data_receive(self):
      message = input()
      sock = self.sock
      server_address = self.server_address
      
      try:
        print('sending {!r}'.format(message))
        sent = sock.sendto(message.encode(), server_address)
        print('waiting to receive')
        data, server = sock.recvfrom(4096)
        print('received {!r}'.format(data.decode('utf-8')))

      finally:
        print('closing socket')
        sock.close()

client = Client()
client.address_unlink()
client.address_bind()
client.data_receive()
