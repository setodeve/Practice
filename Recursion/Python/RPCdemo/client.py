from inetsetting import InetSetting

class Client(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.2')

# test = Client()
# print(test.address)