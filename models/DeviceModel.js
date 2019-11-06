var Device = {
    action: {
        START: "start",
        STOP: "stop",
        TOGGLE: "toggle",
        TOGGLEONOFF: "toggleOnOff",
        TOGGLEOFFON: "toggleOffOn",
        PLAY: "play",
        VOLUME: "volume",
    },
    actionType: {
        RELAY: "relay",
        MP3: "mp3",
        BUZZER: "buzzer",
        CUSTOMPIN: "customPin",
        SERVO: "servo"
    },
    event: {
        TOGGLE: "toggle",
        CODE: "code",
        RANGETRIGGER: "rangeTrigger",
        ON: "on",
        OFF: "off",
        START: "start",
        STOP: "stop"
    },
    evetType: {
        BUTTON: "button",
        MAGNETSWITCH: "magnetSwitch",
        KEYPAD: "keypad",
        RFID: "rfid",
        CUSTOMPIN: "customPin",
        DISTANCESENSOR: "distanceSensor",
        PHOTORESISTOR: "photoResistor",
        THERMOMETER: "thermometer",
        POTENTIOMETER: "potentiometer"
    }
}

exports.Device = Device;