import socket 
import os

class InetSetting:
    def __init__(self,address) -> None:
        self.address = address
        self.sock = socket.socket(socket.AF_UNIX,socket.SOCK_DGRAM)

    def address_bind(self):
        sock = self.sock
        sock.bind(self.address)

    def address_unlink(self):
        sock = self.sock
        os.unlink(self.address)
