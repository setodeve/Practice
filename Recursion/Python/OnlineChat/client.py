from inetsetting import InetSetting
import json

class Client(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.1',8890)
        self.server_address = '127.0.0.3'

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

# ①ソケットを作成する
sock = client.sock

while True:
    try:
        # ②messageを送信する
        print('Input any messages, Type [end] to exit')
        message = input()
        if message != 'end':
            send_len = sock.sendto(message.encode('utf-8'), client.setinfo)
            # ※sendtoメソッドはkeyword arguments(address=serv_addressのような形式)を受け付けないので注意

            # ③Serverからのmessageを受付開始
            print('Waiting response from Server')
            rx_meesage, addr = sock.recvfrom(client.size)
            print(f"[Server]: {rx_meesage.decode(encoding='utf-8')}")

        else:
            print('closing socket')
            sock.close()
            print('done')
            break

    except KeyboardInterrupt:
        print('closing socket')
        sock.close()
        print('done')
        break

