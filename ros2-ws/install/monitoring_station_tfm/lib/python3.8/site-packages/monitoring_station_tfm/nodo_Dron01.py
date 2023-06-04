import rclpy
from rclpy.node import Node
from sensor_msgs.msg import NavSatFix
from std_msgs.msg import String
from std_msgs.msg import Float32

send_pkg = {'id': '', 'type': '', 'lon': '', 'lat': '', 'speed': ''}

class nDron01(Node):

    # def __init__(self):
    #     super().__init__('nodo_Dron01')
    #     self.publisher_ = self.create_publisher(String, '/hmi/robdat', 10)
    #     self.subscription01 = self.create_subscription(
    #         NavSatFix,
    #         '/FV8/mavros/global_position/raw/fix',
    #         self.listener_callback_01,
    #         10)
    #     # self.subscription02 = self.create_subscription(
    #     #     Float32,
    #     #     '/navigation/best_vel',
    #     #     self.listener_callback_02,
    #     #     10)
    #     self.timer = self.create_timer(0.5, self.publish_data)  # Temporizador cada 500 ms


    # def listener_callback_01(self, msg):
    #     global send_pkg
    #     self.get_logger().info('X3: %0.8f - Y3: %0.8f' % (msg.latitude, msg.longitude))
    #     send_pkg['lon'] = '%0.8f' % (msg.longitude)
    #     send_pkg['lat'] = '%0.8f' % (msg.latitude)

    # def listener_callback_02(self, msg):
    #     global send_pkg
    #     send_pkg['speed'] = '%0.2f' % (msg.data)

    # def publish_data(self):
    #     global send_pkg
    #     msg = String()
    #     msg.data = '{ "id": "Dron01", "type": "aereo", "lat": "%s", "lon": "%s", "speed": "%s"}' % (send_pkg['lat'], send_pkg['lon'], send_pkg['speed'])
    #     print(msg.data)
    #     self.publisher_.publish(msg) 

    def __init__(self):
        super().__init__('nodo_Dron01')
        self.publisher_ = self.create_publisher(String, '/hmi/robdat', 10)
        self.subscription = self.create_subscription(
            NavSatFix,
            '/FV8/mavros/global_position/raw/fix',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        #self.get_logger().info('I heard: "%s"' % msg.data)
        self.get_logger().info('X3: %0.8f - Y3: %0.8f' % (msg.latitude, msg.longitude))
        datos = String()
        datos.data = '{ "id": "Dron01", "lat": "%0.8f", "lon": "%0.8f"}' % (msg.latitude, msg.longitude)
        self.publisher_.publish(datos)


def main(args=None):

    global send_pkg

    rclpy.init(args=args)

    nodo = nDron01()

    rclpy.spin(nodo)

    nodo.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
