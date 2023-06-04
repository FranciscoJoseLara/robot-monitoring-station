import rclpy
from rclpy.node import Node
from std_msgs.msg import String


def main(args=None):
    rclpy.init(args=args)

    i = 1
    
    nodo = Node('publicador_simple')
    publisher_ = nodo.create_publisher(String, 'topic', 10)
    msg = String()
    while i > 0:
        msg.data = input("Mensaje que se desea enviar('stop' para parar): ")
        if  msg.data == "stop":
            i = -1
        publisher_.publish(msg)

    # Destroy the node explicitly
    # (optional - otherwise it will be done automatically
    # when the garbage collector destroys the node object)

    nodo.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
