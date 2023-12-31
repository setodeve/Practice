import json
from .inetsetting import InetSetting

class Client(InetSetting):
    def __init__(self) -> None:
        super().__init__('0.0.0.0',9001)
        self.name = input("ユーザー名を入力してください : ")

    def exectsend(self)-> None:
      while True:
          try:
              print('Input any messages, Type [end] to exit')
              data = {
                  "username": self.name,
                  "message": input()
              }
              if data["message"] != 'end':
                  json_data = json.dumps(data).encode('utf-8')
                  send_len = self.sock.sendto(json_data, self.setinfo)

                  print('Waiting response from Server')
                  rx_meesage, addr = self.sock.recvfrom(self.size)
                  print(f"[Server]: {rx_meesage.decode(encoding='utf-8')}")

              else:
                  print('closing socket')
                  self.sock.close()
                  break

          except KeyboardInterrupt:
              print('closing socket')
              self.sock.close()
              break

# client = Client()
# client.exectsend()

