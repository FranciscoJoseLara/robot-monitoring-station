from SendPKG import SendPKG

class nTimerTest():

    def __init__(self):
        SendPKG.set_id = "Carro_01"
        SendPKG.set_type = "terrestre"

    def publish_data(self):
        a = SendPKG.mount()
        print(type(a))


if __name__ == '__main__':
    n = nTimerTest()
    n.publish_data()
    print("hola")
