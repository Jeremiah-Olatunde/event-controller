
class EventController {
  eventMap = new Map();

  constructor(target){
    this.target = target;
  }

  addEventListener(eventName, listener){

    if(this.eventMap.has(eventName)){
      this.eventMap.get(eventName).push(listener);
      return;
    }

    this.eventMap.set(eventName, [ listener ]);
    this.target[`on${eventName}`] = this.runListeners.bind(this, eventName);
  }

  removeEventListener(eventName, listener){
    const listenerArr = this.eventMap.get(eventName) ?? [];

    const idx = listenerArr.findIndex(x => x === listener);
    if(idx === -1) return;

    listenerArr.splice(idx, 1);
    this.eventMap.set(eventName, listenerArr);  
  }

  runListeners(eventName, event){
    this.eventMap
      .get(eventName)
      ?.forEach(listener => listener.call(this.target, event));
  }
}

const btn = new EventController(document.getElementById("btn"));

// TESTING MULTIPLE HANDLER REGISTRATION
//-----------------------------------------------------------------------------

for(let i = 0; i < 3; i++){
  btn.addEventListener("click", () => {
    console.log("clicked => " + i);
  })
}

// TESTING HANDLER REGISTRATION AND SUBSEQUENT DEREGISTRATION
//-----------------------------------------------------------------------------

const groot = () => console.log("I am groot");
btn.addEventListener("click", groot);
setTimeout(() => btn.removeEventListener("click", groot), 1000);

