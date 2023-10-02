from inetsetting import InetSetting

class Server(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.3')

    def exectreciecve(self):
        print('starting up on {}'.format(self.address))
        self.sock.bind(self.address)

        while True:
            print('\nwaiting to receive message')
            data, address = self.sock.recvfrom(4096)

            print('received {} bytes from {}'.format(len(data), address))
            print('{!r}'.format(data.decode('utf-8')))

            if data:
                sent = self.sock.sendto(data, address)
                print('sent {} bytes back to {}'.format(sent, address))

server = Server()
server.exectreciecve()