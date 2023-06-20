import rclpy
import cv2
import numpy as np
from cv_bridge import CvBridge
from rclpy.node import Node
from sensor_msgs.msg import Image, CompressedImage

class ImageConverterNode(Node):
    def __init__(self):
        super().__init__('image_converter_node')
        self.cv_bridge = CvBridge()
        self.subscription = self.create_subscription(
            CompressedImage,
            'compressed_image',
            self.compressed_image_callback,
            10
        )
        self.publisher = self.create_publisher(Image, '/Dron/video_image', 10)

    def compressed_image_callback(self, msg):
        # Descomprimir la imagen comprimida utilizando OpenCV
        np_arr = np.frombuffer(msg.data, np.uint8)
        cv_image = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        # Convertir la imagen de OpenCV a formato sensor_msgs/Image utilizando CvBridge
        image_msg = self.cv_bridge.cv2_to_imgmsg(cv_image, encoding="bgr8")

        self.publisher.publish(image_msg)

def main(args=None):
    rclpy.init(args=args)
    node = ImageConverterNode()
    rclpy.spin(node)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
