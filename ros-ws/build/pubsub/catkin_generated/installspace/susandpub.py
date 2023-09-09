#!/usr/bin/env python3

import rospy
import random
#from std_msgs.msg import String
from geometry_msgs.msg import Twist

def callback(data):
    msg1 = data
    pub1.publish(msg1)
    msg2 = data
    msg2.linear.x += random.randint(1,5)
    msg2.linear.y += random.randint(1,5)
    msg2.linear.z += random.randint(1,5)
    pub2.publish(msg2)
    msg3 = data
    msg3.linear.x += random.randint(1,5)
    msg3.linear.y += random.randint(1,5)
    msg3.linear.z += random.randint(1,5)
    pub3.publish(msg3)

def susandpub():

    #pub = rospy.Publisher('topic01', Twist, queue_size=10)

    rospy.init_node('susandpub', anonymous=True)

    rospy.Subscriber('/turtle1/cmd_vel', Twist, callback)

    rospy.spin()

if __name__ == '__main__':
    
    pub1 = rospy.Publisher('topic01', Twist, queue_size=10)
    pub2 = rospy.Publisher('topic02', Twist, queue_size=10)
    pub3 = rospy.Publisher('topic03', Twist, queue_size=10)

    susandpub()