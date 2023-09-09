#!/usr/bin/env python

import rospy
import random
#from std_msgs.msg import String
#from geometry_msgs.msg import Twist
from sensor_msgs.msg import NavSatFix

def callback(data):
    msg1 = data
    msg1.latitude += 0.0004
    pub1.publish(msg1)
    # msg2 = data
    # msg2.latitude += random.randint(-10,10)*0.00001
    # msg2.longitude += random.randint(-10,10)*0.00001
    # pub2.publish(msg2)
    # msg3 = data
    # msg3.latitude += random.randint(-10,10)*0.00001
    # msg3.longitude += random.randint(-10,10)*0.00001
    # pub3.publish(msg3)

    

def susandpubisa():

    #pub = rospy.Publisher('topic01', Twist, queue_size=10)

    rospy.init_node('susandpubisa', anonymous=True)

    # rospy.Subscriber('/gps0/fix', NavSatFix, callback)
    rospy.Subscriber('/gps0/rob1', NavSatFix, callback)

    # Establece una duración de 0.01 segundos
    duration = rospy.Duration.from_sec(0.5)
    
    while not rospy.is_shutdown():
        # Espera el tiempo especificado
        rospy.sleep(duration)

    # rospy.spin(0.5)

if __name__ == '__main__':
    
    pub1 = rospy.Publisher('gps/unit03', NavSatFix, queue_size=10)
    # pub2 = rospy.Publisher('gps0/rob2', NavSatFix, queue_size=10)
    # pub3 = rospy.Publisher('gps0/rob3', NavSatFix, queue_size=10)

    susandpubisa()