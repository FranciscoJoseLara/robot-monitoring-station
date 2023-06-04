# CMake generated Testfile for 
# Source directory: /home/francisco/ros2-ws/src/ros2_usb_camera/test
# Build directory: /home/francisco/ros2-ws/build/usb_camera_driver/test
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test(usb_camera_driver_tests "/usr/bin/python3" "-u" "/opt/ros/foxy/share/ament_cmake_test/cmake/run_test.py" "/home/francisco/ros2-ws/build/usb_camera_driver/test_results/usb_camera_driver/usb_camera_driver_tests.gtest.xml" "--package-name" "usb_camera_driver" "--output-file" "/home/francisco/ros2-ws/build/usb_camera_driver/ament_cmake_gtest/usb_camera_driver_tests.txt" "--command" "/home/francisco/ros2-ws/build/usb_camera_driver/test/usb_camera_driver_tests" "--gtest_output=xml:/home/francisco/ros2-ws/build/usb_camera_driver/test_results/usb_camera_driver/usb_camera_driver_tests.gtest.xml")
set_tests_properties(usb_camera_driver_tests PROPERTIES  LABELS "gtest" REQUIRED_FILES "/home/francisco/ros2-ws/build/usb_camera_driver/test/usb_camera_driver_tests" TIMEOUT "60" WORKING_DIRECTORY "/home/francisco/ros2-ws/build/usb_camera_driver/test" _BACKTRACE_TRIPLES "/opt/ros/foxy/share/ament_cmake_test/cmake/ament_add_test.cmake;118;add_test;/opt/ros/foxy/share/ament_cmake_gtest/cmake/ament_add_gtest_test.cmake;86;ament_add_test;/opt/ros/foxy/share/ament_cmake_gtest/cmake/ament_add_gtest.cmake;93;ament_add_gtest_test;/home/francisco/ros2-ws/src/ros2_usb_camera/test/CMakeLists.txt;1;ament_add_gtest;/home/francisco/ros2-ws/src/ros2_usb_camera/test/CMakeLists.txt;0;")
subdirs("../gtest")
