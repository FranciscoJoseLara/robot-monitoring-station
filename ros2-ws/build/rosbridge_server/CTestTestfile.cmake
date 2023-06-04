# CMake generated Testfile for 
# Source directory: /home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server
# Build directory: /home/francisco/ros2-ws/build/rosbridge_server
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test(test_websocket_advertise_service.test.py "/usr/bin/python3" "-u" "/opt/ros/foxy/share/ament_cmake_test/cmake/run_test.py" "/home/francisco/ros2-ws/build/rosbridge_server/test_results/rosbridge_server/test_websocket_advertise_service.test.py.xunit.xml" "--package-name" "rosbridge_server" "--output-file" "/home/francisco/ros2-ws/build/rosbridge_server/launch_test/CHANGEME.txt" "--command" "/usr/bin/python3" "-m" "launch_testing.launch_test" "/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/test/websocket/advertise_service.test.py" "--junit-xml=/home/francisco/ros2-ws/build/rosbridge_server/test_results/rosbridge_server/test_websocket_advertise_service.test.py.xunit.xml" "--package-name=rosbridge_server")
set_tests_properties(test_websocket_advertise_service.test.py PROPERTIES  TIMEOUT "60" WORKING_DIRECTORY "/home/francisco/ros2-ws/build/rosbridge_server" _BACKTRACE_TRIPLES "/opt/ros/foxy/share/ament_cmake_test/cmake/ament_add_test.cmake;118;add_test;/opt/ros/foxy/share/launch_testing_ament_cmake/cmake/add_launch_test.cmake;125;ament_add_test;/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/CMakeLists.txt;26;add_launch_test;/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/CMakeLists.txt;0;")
add_test(test_websocket_call_service.test.py "/usr/bin/python3" "-u" "/opt/ros/foxy/share/ament_cmake_test/cmake/run_test.py" "/home/francisco/ros2-ws/build/rosbridge_server/test_results/rosbridge_server/test_websocket_call_service.test.py.xunit.xml" "--package-name" "rosbridge_server" "--output-file" "/home/francisco/ros2-ws/build/rosbridge_server/launch_test/CHANGEME.txt" "--command" "/usr/bin/python3" "-m" "launch_testing.launch_test" "/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/test/websocket/call_service.test.py" "--junit-xml=/home/francisco/ros2-ws/build/rosbridge_server/test_results/rosbridge_server/test_websocket_call_service.test.py.xunit.xml" "--package-name=rosbridge_server")
set_tests_properties(test_websocket_call_service.test.py PROPERTIES  TIMEOUT "60" WORKING_DIRECTORY "/home/francisco/ros2-ws/build/rosbridge_server" _BACKTRACE_TRIPLES "/opt/ros/foxy/share/ament_cmake_test/cmake/ament_add_test.cmake;118;add_test;/opt/ros/foxy/share/launch_testing_ament_cmake/cmake/add_launch_test.cmake;125;ament_add_test;/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/CMakeLists.txt;27;add_launch_test;/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/CMakeLists.txt;0;")
add_test(test_websocket_smoke.test.py "/usr/bin/python3" "-u" "/opt/ros/foxy/share/ament_cmake_test/cmake/run_test.py" "/home/francisco/ros2-ws/build/rosbridge_server/test_results/rosbridge_server/test_websocket_smoke.test.py.xunit.xml" "--package-name" "rosbridge_server" "--output-file" "/home/francisco/ros2-ws/build/rosbridge_server/launch_test/CHANGEME.txt" "--command" "/usr/bin/python3" "-m" "launch_testing.launch_test" "/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/test/websocket/smoke.test.py" "--junit-xml=/home/francisco/ros2-ws/build/rosbridge_server/test_results/rosbridge_server/test_websocket_smoke.test.py.xunit.xml" "--package-name=rosbridge_server")
set_tests_properties(test_websocket_smoke.test.py PROPERTIES  TIMEOUT "60" WORKING_DIRECTORY "/home/francisco/ros2-ws/build/rosbridge_server" _BACKTRACE_TRIPLES "/opt/ros/foxy/share/ament_cmake_test/cmake/ament_add_test.cmake;118;add_test;/opt/ros/foxy/share/launch_testing_ament_cmake/cmake/add_launch_test.cmake;125;ament_add_test;/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/CMakeLists.txt;28;add_launch_test;/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/CMakeLists.txt;0;")
add_test(test_websocket_transient_local_publisher.test.py "/usr/bin/python3" "-u" "/opt/ros/foxy/share/ament_cmake_test/cmake/run_test.py" "/home/francisco/ros2-ws/build/rosbridge_server/test_results/rosbridge_server/test_websocket_transient_local_publisher.test.py.xunit.xml" "--package-name" "rosbridge_server" "--output-file" "/home/francisco/ros2-ws/build/rosbridge_server/launch_test/CHANGEME.txt" "--command" "/usr/bin/python3" "-m" "launch_testing.launch_test" "/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/test/websocket/transient_local_publisher.test.py" "--junit-xml=/home/francisco/ros2-ws/build/rosbridge_server/test_results/rosbridge_server/test_websocket_transient_local_publisher.test.py.xunit.xml" "--package-name=rosbridge_server")
set_tests_properties(test_websocket_transient_local_publisher.test.py PROPERTIES  TIMEOUT "60" WORKING_DIRECTORY "/home/francisco/ros2-ws/build/rosbridge_server" _BACKTRACE_TRIPLES "/opt/ros/foxy/share/ament_cmake_test/cmake/ament_add_test.cmake;118;add_test;/opt/ros/foxy/share/launch_testing_ament_cmake/cmake/add_launch_test.cmake;125;ament_add_test;/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/CMakeLists.txt;29;add_launch_test;/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/CMakeLists.txt;0;")
add_test(test_websocket_best_effort_publisher.test.py "/usr/bin/python3" "-u" "/opt/ros/foxy/share/ament_cmake_test/cmake/run_test.py" "/home/francisco/ros2-ws/build/rosbridge_server/test_results/rosbridge_server/test_websocket_best_effort_publisher.test.py.xunit.xml" "--package-name" "rosbridge_server" "--output-file" "/home/francisco/ros2-ws/build/rosbridge_server/launch_test/CHANGEME.txt" "--command" "/usr/bin/python3" "-m" "launch_testing.launch_test" "/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/test/websocket/best_effort_publisher.test.py" "--junit-xml=/home/francisco/ros2-ws/build/rosbridge_server/test_results/rosbridge_server/test_websocket_best_effort_publisher.test.py.xunit.xml" "--package-name=rosbridge_server")
set_tests_properties(test_websocket_best_effort_publisher.test.py PROPERTIES  TIMEOUT "60" WORKING_DIRECTORY "/home/francisco/ros2-ws/build/rosbridge_server" _BACKTRACE_TRIPLES "/opt/ros/foxy/share/ament_cmake_test/cmake/ament_add_test.cmake;118;add_test;/opt/ros/foxy/share/launch_testing_ament_cmake/cmake/add_launch_test.cmake;125;ament_add_test;/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/CMakeLists.txt;30;add_launch_test;/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/CMakeLists.txt;0;")
add_test(test_websocket_multiple_subscribers_raw.test.py "/usr/bin/python3" "-u" "/opt/ros/foxy/share/ament_cmake_test/cmake/run_test.py" "/home/francisco/ros2-ws/build/rosbridge_server/test_results/rosbridge_server/test_websocket_multiple_subscribers_raw.test.py.xunit.xml" "--package-name" "rosbridge_server" "--output-file" "/home/francisco/ros2-ws/build/rosbridge_server/launch_test/CHANGEME.txt" "--command" "/usr/bin/python3" "-m" "launch_testing.launch_test" "/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/test/websocket/multiple_subscribers_raw.test.py" "--junit-xml=/home/francisco/ros2-ws/build/rosbridge_server/test_results/rosbridge_server/test_websocket_multiple_subscribers_raw.test.py.xunit.xml" "--package-name=rosbridge_server")
set_tests_properties(test_websocket_multiple_subscribers_raw.test.py PROPERTIES  TIMEOUT "60" WORKING_DIRECTORY "/home/francisco/ros2-ws/build/rosbridge_server" _BACKTRACE_TRIPLES "/opt/ros/foxy/share/ament_cmake_test/cmake/ament_add_test.cmake;118;add_test;/opt/ros/foxy/share/launch_testing_ament_cmake/cmake/add_launch_test.cmake;125;ament_add_test;/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/CMakeLists.txt;31;add_launch_test;/home/francisco/ros2-ws/src/rosbridge_suite/rosbridge_server/CMakeLists.txt;0;")
