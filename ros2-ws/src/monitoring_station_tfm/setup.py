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
        'pub01 = monitoring_station_tfm.unit01_gps_data_pub:main',
        'pub02 = monitoring_station_tfm.unit02_gps_data_pub:main',
        'pub03 = monitoring_station_tfm.unit03_gps_data_pub:main',
        'unit_sync_pub = monitoring_station_tfm.unit_sync_pub:main',
        'sample_features_pub = monitoring_station_tfm.sample_features_pub:pub',
        'cuadriga = monitoring_station_tfm.node_Cuadriga:main',
        'dron = monitoring_station_tfm.node_Dron:main',
        'rambler = monitoring_station_tfm.node_Rambler:main',
        'roverj8 = monitoring_station_tfm.node_RoverJ8:main',
        'tX2 = monitoring_station_tfm.node_Target_X2:main',
        'tX3 = monitoring_station_tfm.node_Target_X3:main',
        'tX4 = monitoring_station_tfm.node_Target_X4:main',
        'tPixel = monitoring_station_tfm.node_Target_Pixel:main',
        ],
    },
)
