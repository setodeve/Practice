from inetsetting import InetSetting
import socket
import time

class Server(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.1',8890)

server = Server()

# ①ソケットを作成する
sock = server.sock
print('create socket')

# ②自ホストで使用するIPアドレスとポート番号を指定
sock.bind(server.setinfo)

while True:
    try :
        # ③Clientからのmessageの受付開始
        print('Waiting message')
        message, cli_addr = sock.recvfrom(server.size)
        message = message.decode(encoding='utf-8')
        print(f'Received message is [{message}]')

        # Clientが受信待ちになるまで待つため
        time.sleep(1)

        # ④Clientへ受信完了messageを送信
        print('Send response to Client')
        sock.sendto('Success to receive message'.encode(encoding='utf-8'), cli_addr)

    except KeyboardInterrupt:
        print ('\n . . .\n')
        sock.close()
        break
