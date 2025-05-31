# ulogging.py - minimal MicroPython logging module
DEBUG = 10
INFO = 20
WARNING = 30
ERROR = 40
CRITICAL = 50

def getLogger(name=None):
    return Logger()

class Logger:
    def __init__(self):
        self.level = INFO
        
    def log(self, level, msg):
        print(msg)
        
    def setLevel(self, level):
        self.level = level

    def debug(self, msg): self.log(DEBUG, msg)
    def info(self, msg): self.log(INFO, msg)
    def warning(self, msg): self.log(WARNING, msg)
    def error(self, msg): self.log(ERROR, msg)
    def critical(self, msg): self.log(CRITICAL, msg)

basicConfig = lambda: None
