from setuptools import setup

package_name = 'monitoring_station_tfm'

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
    description='Paquete de publicadores/subscriptores ros2 rclpy',
    license='AFL-3.0',
    tests_require=['pytest'],
    entry_points={
        'console_scripts': [
		'talker = monitoring_station_tfm.publicador_bucle:main',
		'listener = monitoring_station_tfm.subscriptor_bucle:main',
 		'publicador = monitoring_station_tfm.publicador:main',
        'pub01 = monitoring_station_tfm.test01_bridge:main',
        'pub02 = monitoring_station_tfm.test02_bridge:main',
        'pub03 = monitoring_station_tfm.test03_bridge:main',
        'test01 = monitoring_station_tfm.nodo_Dron01:main',
        'test02 = monitoring_station_tfm.nodo_RoverJ8:main',
        'test03 = monitoring_station_tfm.nodo_robot03:main',
        'test04 = monitoring_station_tfm.nodo_robot04:main',
        'test05 = monitoring_station_tfm.nodo_robot05:main',
        'timer = monitoring_station_tfm.test_timer:main',
        'test-pub = monitoring_station_tfm.stsb_sim_pub:pub',
        ],
    },
)
