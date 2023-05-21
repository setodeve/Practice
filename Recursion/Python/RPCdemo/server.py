from inetsetting import InetSetting

class Server(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.3')

    def data_receive(self):
      sock = self.sock
      
      while True:
        print('\nwaiting to receive message')
        data, address = sock.recvfrom(4096)

        print('received {} bytes from {}'.format(len(data), address))
        print('{!r}'.format(data.decode('utf-8')))

        if data:
            sent = sock.sendto(data, address)
            print('sent {} bytes back to {}'.format(sent, address))

server = Server()
server.address_unlink()
server.address_bind()
server.data_receive()