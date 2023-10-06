from inetsetting import InetSetting

class Server(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.3',1234)

    def exectreciecve(self)-> None:
        print('starting up on {}'.format(self.address))
        self.address_bind()

        while True:
            print('\nwaiting to receive message')
            data, address = self.sock.recvfrom(4096)

            print('received {} bytes from {}'.format(len(data), address))
            print('{!r}'.format(data.decode('utf-8')))

            if data:
                sent = self.sock.sendto(data, address)
                print('sent {} bytes back to {}'.format(sent, address))

server = Server()
print(server.address)
server.exectreciecve()