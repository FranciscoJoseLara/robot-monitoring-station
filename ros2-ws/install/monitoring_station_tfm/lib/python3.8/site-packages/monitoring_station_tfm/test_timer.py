import rclpy
from rclpy.node import Node
from sensor_msgs.msg import NavSatFix
from std_msgs.msg import String
from std_msgs.msg import Float32
from monitoring_station_tfm.SendPKG import SendPKG

class nTimerTest(Node):

    def __init__(self):
        super().__init__('nodoTestTimer')

        self.pkg = SendPKG()

        self.pkg.set_id("Carro_01")
        self.pkg.set_type("terrestre")
        self.pkg.set_speedFlag("true")
        self.pkg.set_tiltFlag("false")
        self.pkg.set_statusFlag("false")
        self.pkg.set_batteryFlag("false")
        self.pkg.set_cameraFlag("true")

        self.publisher_ = self.create_publisher(String, '/hmi/robdat', 10)
        self.subscription01 = self.create_subscription(
            NavSatFix,
            '/gps/unit01',
            self.listener_callback_01,
            10)
        self.subscription02 = self.create_subscription(
            Float32,
            '/speed/unit01',
            self.listener_callback_02,
            10)
        self.subscription03 = self.create_subscription(
            Float32,
            '/tilt/unit01',
            self.listener_callback_03,
            10)
        self.subscription04 = self.create_subscription(
            Float32,
            '/battery/unit01',
            self.listener_callback_04,
            10)
        self.subscription05 = self.create_subscription(
            String,
            '/status/unit01',
            self.listener_callback_05,
            10)
        self.timer = self.create_timer(0.5, self.publish_data)  # Temporizador cada 1000 ms


    def listener_callback_01(self, msg):
        self.pkg.set_lon('%0.8f' % (msg.longitude))
        self.pkg.set_lat('%0.8f' % (msg.latitude))

    def listener_callback_02(self, msg):
        self.pkg.set_speed('%0.2f' % (msg.data))
    
    def listener_callback_03(self, msg):
        self.pkg.set_tilt('%0.2f' % (msg.data))

    def listener_callback_04(self, msg):
        self.pkg.set_battery('%0.0f' % (msg.data))

    def listener_callback_05(self, msg):
        self.pkg.set_status(msg.data)

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
