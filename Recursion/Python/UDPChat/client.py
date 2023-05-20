import socket
from faker import Faker
import os

fake = Faker()

sock = socket.socket(socket.AF_UNIX, socket.SOCK_DGRAM)

server_address = '127.0.0.1'
client_address = '127.0.0.2'

message = fake.name()

try:
   os.unlink(client_address)
except FileNotFoundError:
   pass

sock.bind(client_address)

try:
   print('sending {!r}'.format(message))
   sent = sock.sendto(message.encode(), server_address)

   print('waiting to receive')
   data, server = sock.recvfrom(4096)
   print('received {!r}'.format(data.decode('utf-8')))

finally:
   print('closing socket')
   sock.close()
