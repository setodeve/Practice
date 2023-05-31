import sys
sys.dont_write_bytecode = True
import socket 
import os

class InetSetting:
    def __init__(self,address,port) -> None:
        self.address = address
        self.port = port
        self.sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)

    def address_bind(self):
        sock = self.sock
        sock.bind(self.address,self.port)
        print('starting up on {}'.format(self.address))

    def address_unlink(self):
        try:
            os.unlink(self.address)
        except FileNotFoundError:
            pass