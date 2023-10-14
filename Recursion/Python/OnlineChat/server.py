from inetsetting import InetSetting
import time

class Server(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.1',8890)

    def exectreciecve(self)-> None:
        self.sock.bind(self.setinfo)

        while True:
            try :
                print('Waiting message')
                message, cli_addr = self.sock.recvfrom(self.size)
                message = message.decode(encoding='utf-8')
                print(f'Received message is [{message}]')

                time.sleep(1)

                print('Send response to Client')
                self.sock.sendto('Success to receive message'.encode(encoding='utf-8'), cli_addr)

            except KeyboardInterrupt:
                print ('\n . . .\n')
                self.sock.close()
                break

server = Server()
server.exectreciecve()