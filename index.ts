const motionPin = 14;
const Gpio = require("onoff").Gpio; //include onoff to interact with the GPIO
const SENSOR = new Gpio(motionPin, "in"); //use GPIO pin 4, and specify that it is output
const monitor = setInterval(detectMotion, 100); //run the detectMotion function every 250ms

function detectMotion(): void {
  //function to start blinking
  if (SENSOR.readSync() === 0) {
    //check the pin state, if the state is 0 (or off)
    // SENSOR.writeSync(1); //set pin state to 1 (turn SENSOR on)
    console.log("reading = 0");
  } else {
    // SENSOR.writeSync(0); //set pin state to 0 (turn SENSOR off)
    console.log("reading = 1");
  }
}

function stop(): void {
  //function to stop blinking
  clearInterval(monitor); // Stop blink intervals
  //   SENSOR.writeSync(0); // Turn SENSOR off
  SENSOR.unexport(); // Unexport GPIO to free resources
}

// setTimeout(stop, 5000); //stop blinking after 5 seconds

function main(): void {
  console.log("Starting Covid-Candy-Dispenser!");
  console.log(
    "Gpio functionality accessible on this computer?",
    Gpio.accessible
  );
}

main();
