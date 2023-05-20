from inetsetting import InetSetting

class Server(InetSetting):
    def __init__(self) -> None:
        super().__init__('127.0.0.3')
