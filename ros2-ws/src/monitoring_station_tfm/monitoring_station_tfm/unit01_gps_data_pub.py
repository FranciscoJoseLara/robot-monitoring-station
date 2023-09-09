#
#   Node that publish the gps data of unit01 extract from '/gps/unit01' topic
#
#   Author: Francisco José Lara
#
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import NavSatFix
from std_msgs.msg import String


class suscriptor(Node):

    def __init__(self):
        # super().__init__('sus')
        super().__init__('unit01_gps_pub')
        self.publisher_ = self.create_publisher(String, '/hmi/robdat', 10)
        self.subscription = self.create_subscription(
            NavSatFix,
            '/gps/unit01',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        #self.get_logger().info('I heard: "%s"' % msg.data)
        self.get_logger().info('X1: %0.8f - Y1: %0.8f' % (msg.latitude, msg.longitude))
        datos = String()
        datos.data = '{ "id": "rob01", "lat": "%0.8f", "lon": "%0.8f"}' % (msg.latitude, msg.longitude)
        self.publisher_.publish(datos)


def main(args=None):
    rclpy.init(args=args)

    sus = suscriptor()

    rclpy.spin(sus)

    sus.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
