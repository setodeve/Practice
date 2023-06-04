from inetsetting import InetSetting
import json

class Client(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.2')
        self.server_address = '127.0.0.3'
        self.data = {
          "method": "valid",
          "params": {"str1": "abc","str2": "cba"}
        }