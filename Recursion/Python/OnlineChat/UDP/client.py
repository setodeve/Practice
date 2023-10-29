from inetsetting import InetSetting

class Client(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.1',8890)

    def exectsend(self)-> None:
      while True:
          try:
              print('Input any messages, Type [end] to exit')
              message = input()
              if message != 'end':
                  send_len = self.sock.sendto(message.encode('utf-8'), self.setinfo)

                  print('Waiting response from Server')
                  rx_meesage, addr = self.sock.recvfrom(self.size)
                  print(f"[Server]: {rx_meesage.decode(encoding='utf-8')}")

              else:
                  print('closing socket')
                  self.sock.close()
                  # print('done')
                  break

          except KeyboardInterrupt:
              print('closing socket')
              self.sock.close()
              # print('done')
              break

client = Client()
client.exectsend()

