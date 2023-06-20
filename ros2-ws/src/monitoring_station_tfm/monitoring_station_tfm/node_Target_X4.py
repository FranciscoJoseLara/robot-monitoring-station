import rclpy
from rclpy.node import Node
from std_msgs.msg import String
from monitoring_station_tfm.SendPKG import SendPKG

class nTimerTest(Node):

    def __init__(self):
        super().__init__('node_Target_X4')

        self.pkg = SendPKG()

        self.pkg.set_id("X4")
        self.pkg.set_type("target")
        self.pkg.set_camera("")

        # Flags
        self.pkg.set_speedFlag("false")
        self.pkg.set_tiltFlag("false")
        self.pkg.set_statusFlag("false")
        self.pkg.set_batteryFlag("false")
        self.pkg.set_cameraFlag("false")

        self.publisher_ = self.create_publisher(String, '/hmi/robdat', 10)
        self.subscription01 = self.create_subscription(
            String,
            'geo_multilateration',
            self.listener_callback_01,
            10)
        self.timer = self.create_timer(0.5, self.publish_data)  # Temporizador cada 500 ms


    def listener_callback_01(self, msg):
        cadena = msg.data
        parametros = cadena.split(",")

        latitud = parametros[0]
        longitud = parametros[1]
        etiqueta = parametros[3]

        if etiqueta == 'X4':
            self.pkg.set_lon('%0.8f' % (longitud))
            self.pkg.set_lat('%0.8f' % (latitud))


    def publish_data(self):
        msg = String()
        msg.data = self.pkg.assemble_pkg()
        print(msg.data)
        self.publisher_.publish(msg) 


def main(args=None):

    rclpy.init(args=args)

    nodo = nTimerTest()

    rclpy.spin(nodo)

    nodo.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
