import rclpy
from rclpy.node import Node
from sensor_msgs.msg import Image
from cv_bridge import CvBridge
import cv2

class CameraNode(Node):
    def __init__(self):
        super().__init__('driver_camera')
        self.publisher_ = self.create_publisher(Image, 'video_image', 10)
        self.timer_ = self.create_timer(1.0/30.0, self.publish_image)
        self.bridge_ = CvBridge()
        self.capture_ = cv2.VideoCapture(0)
        self.capture_.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
        self.capture_.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

    def publish_image(self):
        ret, frame = self.capture_.read()
        if ret:
            msg = self.bridge_.cv2_to_imgmsg(frame, encoding='bgr8')
            self.publisher_.publish(msg)

def main(args=None):
    rclpy.init(args=args)
    node = CameraNode()
    rclpy.spin(node)
    node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
