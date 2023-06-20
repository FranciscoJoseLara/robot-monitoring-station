from setuptools import setup

package_name = 'camera_driver'

setup(
    name=package_name,
    version='0.0.0',
    packages=[package_name],
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
    ],
    install_requires=['setuptools'],
    zip_safe=True,
    maintainer='Francisco Lara',
    maintainer_email='fjlara@uma.es',
    description='Driver para control de camaras simples en ROS2',
    license='AFL-3.0',
    tests_require=['pytest'],
    entry_points={
        'console_scripts': [
		'camera = camera_driver.driver_camera:main',
		'camera-usb = camera_driver.driver_camera_usb:main',
		'camera-compressed = camera_driver.driver_camera_compressed:main',
		'com-to-img = camera_driver.compressed_to_image:main',
		'comToImg-RoverJ8 = camera_driver.compressed_to_image_RoverJ8:main',
		'comToImg-Dron = camera_driver.compressed_to_image_Dron:main',
		'dron = camera_driver.cti_Dron:main',
		'rj8_movil = camera_driver.cti_RJ8_movil:main',
		'rj8_front = camera_driver.cti_RJ8_front:main',
		'rj8_rear = camera_driver.cti_RJ8_rear:main',
        ],
    },
)
