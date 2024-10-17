class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }
  off(event, listenerToRemove) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    );
  }
  emit(event, ...args) {
    if (!this.events[event]) return;

    this.events[event].forEach((listener) => {
      listener(...args);
    });
  }
}

const emitter = new EventEmitter();

function logMessage(message) {
  console.log("Received:", message);
}
emitter.on("message", logMessage);

emitter.emit("message", "Hello World!");

emitter.off("message", logMessage);

emitter.emit("message", "This will not be logged");
