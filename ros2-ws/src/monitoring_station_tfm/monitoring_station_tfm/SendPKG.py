
# Clase con el paquete a enviar hacia el HMI

class SendPKG:
    def __init__(self):
        self.id = None
        self.type = None
        self.lat = None
        self.lon = None
        self.speed = None
        self.speedFlag = None
        self.tilt = None
        self.tiltFlag = None
        self.status = None
        self.statusFlag = None
        self.battery = None
        self.batteryFlag = None
        self.cameraFlag = None
    
    # Getter
    def get_id(self):
        return self.id
    def get_type(self):
        return self.type
    def get_lat(self):
        return self.lat
    def get_lon(self):
        return self.lon
    def get_speed(self):
        return self.speed
    def get_speedFlag(self):
        return self.speedFlag
    def get_tilt(self):
        return self.tilt
    def get_tiltFlag(self):
        return self.tiltFlag
    def get_status(self):
        return self.status
    def get_statusFlag(self):
        return self.statusFlag
    def get_battery(self):
        return self.battery
    def get_batteryFlag(self):
        return self.batteryFlag
    def get_cameraFlag(self):
        return self.cameraFlag

    # Setter
    def set_id(self, id):
        self.id = id
    def set_type(self, type):
        self.type = type
    def set_lat(self, lat):
        self.lat = lat
    def set_lon(self, lon):
        self.lon = lon
    def set_speed(self, speed):
        self.speed = speed
    def set_speedFlag(self, speedFlag):
        self.speedFlag = speedFlag
    def set_tilt(self, tilt):
        self.tilt = tilt
    def set_tiltFlag(self, tiltFlag):
        self.tiltFlag = tiltFlag
    def set_status(self, status):
        self.status = status
    def set_statusFlag(self, statusFlag):
        self.statusFlag = statusFlag
    def set_battery(self, battery):
        self.battery = battery
    def set_batteryFlag(self, batteryFlag):
        self.batteryFlag = batteryFlag
    def set_cameraFlag(self, cameraFlag):
        self.cameraFlag = cameraFlag

    def assemble_pkg(self):
        send_pkg = ('{'
        '"id": "%s",'
        '"type": "%s",' 
        '"lat": "%s",'
        '"lon": "%s",'
        '"speed": "%s",'
        '"speedFlag": "%s",'
        '"tilt": "%s",'
        '"tiltFlag": "%s",' 
        '"status": "%s",'
        '"statusFlag": "%s",'
        '"battery": "%s",'
        '"batteryFlag": "%s",'
        '"cameraFlag": "%s"'
        '}') % (self.id, 
                 self.type, 
                 self.lat,
                 self.lon,
                 self.speed,
                 self.speedFlag,
                 self.tilt,
                 self.tiltFlag,
                 self.status,
                 self.statusFlag,
                 self.battery,
                 self.batteryFlag,
                 self.cameraFlag)
        
        return send_pkg
