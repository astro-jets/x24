#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

const char* ssid = "ESP8266_Stepper_Control";
const char* password = "password1234";

ESP8266WebServer server(80);

// Motor 1 pins
const int dirPin1 = D1;
const int stepPin1 = D2;
const int enablePin1 = D6;

// Motor 2 pins
const int dirPin2 = D3;
const int stepPin2 = D4;
const int enablePin2 = D7;

volatile bool motor1Running = false;
volatile bool motor1Direction = true;
volatile bool motor1SingleStepMode = false;
volatile int motor1StepsToMove = 0;
volatile int motor1CurrentPosition = 0;

volatile bool motor2Running = false;
volatile bool motor2Direction = true;
volatile bool motor2SingleStepMode = false;
volatile int motor2StepsToMove = 0;
volatile int motor2CurrentPosition = 0;

const int stepsPerRevolution = 200; // Steps per revolution for your motors
const int fullRotationSteps = 200;  // 360 degrees equivalent

unsigned long lastStepTime1 = 0;
unsigned long lastStepTime2 = 0;
const unsigned long stepInterval = 1600; // Adjust the value for the desired step rate

// Function prototypes
void handleRoot();
void handleControl();
void handleRotate();
void handleDirect();
void handleMotorControl(int motor, String action);

void setup() {
  Serial.begin(115200);

  // Initialize motor 1 control pins
  pinMode(stepPin1, OUTPUT);
  pinMode(dirPin1, OUTPUT);
  pinMode(enablePin1, OUTPUT);
  digitalWrite(stepPin1, LOW);
  digitalWrite(dirPin1, LOW);
  digitalWrite(enablePin1, HIGH); // Disable motor 1 initially

  // Initialize motor 2 control pins
  pinMode(stepPin2, OUTPUT);
  pinMode(dirPin2, OUTPUT);
  pinMode(enablePin2, OUTPUT);
  digitalWrite(stepPin2, LOW);
  digitalWrite(dirPin2, LOW);
  digitalWrite(enablePin2, HIGH); // Disable motor 2 initially

  // Set up the ESP8266 as an Access Point
  WiFi.softAP(ssid, password);
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(myIP);

  // Start the web server
  server.on("/", handleRoot);
  server.on("/control", handleControl);
  server.on("/rotate", handleRotate);
  server.on("/direct", handleDirect);
  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  server.handleClient();
  if (motor1Running) {
    unsigned long currentTime = micros();
    if (currentTime - lastStepTime1 >= stepInterval) {
      lastStepTime1 = currentTime;
      // Make a step for motor 1
      digitalWrite(stepPin1, HIGH);
      delayMicroseconds(10); // Minimum pulse width
      digitalWrite(stepPin1, LOW);

      motor1CurrentPosition += motor1Direction ? 1 : -1;

      if (motor1SingleStepMode) {
        motor1StepsToMove--;
        if (motor1StepsToMove <= 0) {
          motor1Running = false;
          digitalWrite(enablePin1, HIGH); // Disable motor 1
        }
      }
    }
  }
  
  if (motor2Running) {
    unsigned long currentTime = micros();
    if (currentTime - lastStepTime2 >= stepInterval) {
      lastStepTime2 = currentTime;
      // Make a step for motor 2
      digitalWrite(stepPin2, HIGH);
      delayMicroseconds(10); // Minimum pulse width
      digitalWrite(stepPin2, LOW);

      motor2CurrentPosition += motor2Direction ? 1 : -1;

      if (motor2SingleStepMode) {
        motor2StepsToMove--;
        if (motor2StepsToMove <= 0) {
          motor2Running = false;
          digitalWrite(enablePin2, HIGH); // Disable motor 2
        }
      }
    }
  }
}

void handleRoot() {
  String html = R"====(
    <html>
    <head>
      <title>Stepper Motor Control</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
          color: #333;
          text-align: center;
          margin: 0;
          padding: 0;
        }
        .container {
          margin: 20px auto;
          padding: 20px;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          max-width: 500px;
        }
        .button {
          padding: 10px 20px;
          margin: 5px;
          border: none;
          border-radius: 5px;
          background-color: #007bff;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
        }
        .button:hover {
          background-color: #0056b3;
        }
        .button:active {
          transform: scale(0.95);
        }
        .slider {
          width: 80%;
          margin: 15px 0;
        }
        .slider + span {
          display: inline-block;
          margin: 10px;
          font-size: 18px;
        }
        h2 {
          color: #007bff;
        }
        .subscribe {
          padding: 10px 20px;
          margin: 20px;
          border: none;
          border-radius: 5px;
          background-color: #fc3c3c;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
        }
        .subscribe:hover {
          background-color: #df1ed5;
        }
        .subscribe:active {
          transform: scale(0.95);
        }
        @media (max-width: 600px) {
          .container {
            width: 90%;
          }
          .button, .subscribe {
            width: 90%;
            padding: 15px;
          }
          .slider {
            width: 90%;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Stepper Motor 1 Control</h2>
        <button class="button" onclick="controlMotor(1, 'cw')">Clockwise</button>
        <button class="button" onclick="controlMotor(1, 'ccw')">Anticlockwise</button>
        <button class="button" onclick="controlMotor(1, 'stop')">Stop</button>
        <br><br>
        <input type="range" min="0" max="360" value="0" class="slider" id="angleSlider1" oninput="updateAngleValue(1)">
        <span id="angleValue1">0</span> degrees
        <button class="button" onclick="rotateMotor(1)">Rotate</button>
        <br><br>
        <input type="range" min="0" max="360" value="0" class="slider" id="directSlider1" oninput="directControl(1)">
        
      </div>
      <br><br>
      <div class="container">
        <h2>Stepper Motor 2 Control</h2>
        <button class="button" onclick="controlMotor(2, 'cw')">Clockwise</button>
        <button class="button" onclick="controlMotor(2, 'ccw')">Anticlockwise</button>
        <button class="button" onclick="controlMotor(2, 'stop')">Stop</button>
        <br><br>
        <input type="range" min="0" max="360" value="0" class="slider" id="angleSlider2" oninput="updateAngleValue(2)">
        <span id="angleValue2">0</span> degrees
        <button class="button" onclick="rotateMotor(2)">Rotate</button>
        <br><br>
        <input type="range" min="0" max="360" value="0" class="slider" id="directSlider2" oninput="directControl(2)">
        
      </div>
      <br><br>
      <button class="subscribe" onclick="window.open('https://www.youtube.com/channel/CHANNEL_ID', '_blank')">Subscribe</button>
      <script>
        function controlMotor(motor, action) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "/control?motor=" + motor + "&action=" + action, true);
          xhr.send();
        }
        
        function rotateMotor(motor) {
          var angle = document.getElementById("angleSlider" + motor).value;
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "/rotate?motor=" + motor + "&angle=" + angle, true);
          xhr.send();
        }
        
        function directControl(motor) {
          var angle = document.getElementById("directSlider" + motor).value;
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "/direct?motor=" + motor + "&angle=" + angle, true);
          xhr.send();
        }
        
        function updateAngleValue(motor) {
          var angle = document.getElementById("angleSlider" + motor).value;
          document.getElementById("angleValue" + motor).innerText = angle;
        }
        
        function updateDirectValue(motor) {
          var angle = document.getElementById("directSlider" + motor).value;
          document.getElementById("directValue" + motor).innerText = angle;
        }
      </script>
    </body>
    </html>
  )====";
  
  server.send(200, "text/html", html);
}

void handleControl() {
  if (server.hasArg("motor") && server.hasArg("action")) {
    int motor = server.arg("motor").toInt();
    String action = server.arg("action");
    handleMotorControl(motor, action);
    server.send(200, "text/plain", "OK");
  } else {
    server.send(400, "text/plain", "Bad Request");
  }
}

void handleMotorControl(int motor, String action) {
  if (motor == 1) {
    if (action == "cw") {
      motor1Running = true;
      motor1Direction = true;
      motor1SingleStepMode = false;
      digitalWrite(dirPin1, HIGH);
      digitalWrite(enablePin1, LOW); // Enable motor 1
    } else if (action == "ccw") {
      motor1Running = true;
      motor1Direction = false;
      motor1SingleStepMode = false;
      digitalWrite(dirPin1, LOW);
      digitalWrite(enablePin1, LOW); // Enable motor 1
    } else if (action == "stop") {
      motor1Running = false;
      digitalWrite(enablePin1, HIGH); // Disable motor 1
    }
  } else if (motor == 2) {
    if (action == "cw") {
      motor2Running = true;
      motor2Direction = true;
      motor2SingleStepMode = false;
      digitalWrite(dirPin2, HIGH);
      digitalWrite(enablePin2, LOW); // Enable motor 2
    } else if (action == "ccw") {
      motor2Running = true;
      motor2Direction = false;
      motor2SingleStepMode = false;
      digitalWrite(dirPin2, LOW);
      digitalWrite(enablePin2, LOW); // Enable motor 2
    } else if (action == "stop") {
      motor2Running = false;
      digitalWrite(enablePin2, HIGH); // Disable motor 2
    }
  }
}

void handleRotate() {
  if (server.hasArg("motor") && server.hasArg("angle")) {
    int motor = server.arg("motor").toInt();
    int angle = server.arg("angle").toInt();
    
    if (angle >= 0 && angle <= 360) {
      if (motor == 1) {
        motor1StepsToMove = map(angle, 0, 360, 0, fullRotationSteps);
        motor1Running = true;
        motor1SingleStepMode = true;
        digitalWrite(enablePin1, LOW); // Enable motor 1
      } else if (motor == 2) {
        motor2StepsToMove = map(angle, 0, 360, 0, fullRotationSteps);
        motor2Running = true;
        motor2SingleStepMode = true;
        digitalWrite(enablePin2, LOW); // Enable motor 2
      }
    }
    server.send(200, "text/plain", "OK");
  } else {
    server.send(400, "text/plain", "Bad Request");
  }
}

void handleDirect() {
  if (server.hasArg("motor") && server.hasArg("angle")) {
    int motor = server.arg("motor").toInt();
    int angle = server.arg("angle").toInt();
    
    if (angle >= 0 && angle <= 360) {
      if (motor == 1) {
        int targetPosition = map(angle, 0, 360, 0, fullRotationSteps);
        motor1StepsToMove = targetPosition - motor1CurrentPosition;
        motor1Direction = (motor1StepsToMove >= 0);
        motor1StepsToMove = abs(motor1StepsToMove);
        motor1Running = true;
        motor1SingleStepMode = true;
        digitalWrite(dirPin1, motor1Direction ? HIGH : LOW);
        digitalWrite(enablePin1, LOW); // Enable motor 1
      } else if (motor == 2) {
        int targetPosition = map(angle, 0, 360, 0, fullRotationSteps);
        motor2StepsToMove = targetPosition - motor2CurrentPosition;
        motor2Direction = (motor2StepsToMove >= 0);
        motor2StepsToMove = abs(motor2StepsToMove);
        motor2Running = true;
        motor2SingleStepMode = true;
        digitalWrite(dirPin2, motor2Direction ? HIGH : LOW);
        digitalWrite(enablePin2, LOW); // Enable motor 2
      }
    }
    server.send(200, "text/plain", "OK");
  } else {
    server.send(400, "text/plain", "Bad Request");
  }
}
