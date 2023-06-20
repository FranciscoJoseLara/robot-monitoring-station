import rclpy
from rclpy.node import Node
from std_msgs.msg import String
from std_msgs.msg import Float32
import time

def pub():
    rclpy.init()
    nodo = Node('pub_test')
    
    speed_pub = nodo.create_publisher(Float32, '/speed/unit01', 10)
    tilt_pub = nodo.create_publisher(Float32, '/tilt/unit01', 10)
    status_pub = nodo.create_publisher(String, '/status/unit01', 10)
    battery_pub = nodo.create_publisher(Float32, '/battery/unit01', 10)

    speed = Float32()
    tilt = Float32()
    battery = Float32()
    status = String()


    speed.data = 5.00
    tilt.data = -25.00
    battery.data = 55.00
    status.data = "Online"

    while 1:
        if speed.data > 49.00:
            speed.data = 0.00
        speed_pub.publish(speed)
        speed.data += 0.35
        
        if tilt.data > 45.00:
            tilt.data = -45.00
        tilt_pub.publish(tilt)
        tilt.data += 2

        if battery.data < 2.00:
            battery.data = 100.00
        battery_pub.publish(battery)
        battery.data -= 0.5

        if battery.data < 10.00:
            status.data = "OFFline"
            status_pub.publish(status)
        else:
            status.data = "ONline"
            status_pub.publish(status)
        
        time.sleep(0.5)

    nodo.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    pub()
