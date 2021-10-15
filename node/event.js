const events = require("events");
let eventEmitter = new events.EventEmitter();
function callback1() {
    console.log("timeout_event事件触发");
}
function callback2() {
    console.log("timeout_event同一个事件注册多个方法");
}
/*
eventEmitter.on("timeout_event",callback1);
eventEmitter.on("timeout_event",callback2);
setTimeout(function () {
    eventEmitter.emit("timeout_event");
},1000);*/
/*带参数*/
/*addListener和on没有区别，eventEmitter.prototype.on=eventEmitter.prototype.addListener*/
eventEmitter.on("timeout_event",function (t) {
    console.log("timeout_event事件触发"+ t);
});
/*eventEmitter.addListener("timeout_event",function (t) {
    console.log("timeout_event事件触发"+ t);
});*/
/*eventEmitter.once("timeout_event",function (t) {//只触发一次
    console.log("timeout_event事件触发"+ t);
});*/
eventEmitter.on("sayHello",function (t) {
    console.log("sayHello事件触发"+ t);
});
let listenArray = eventEmitter.listeners("timeout_event");
let count = 0;
eventEmitter.removeAllListeners("timeout_event",function () {
    console.log("timeout_event从事件列表中被移除");
});
setTimeout(function () {
    count++;
    eventEmitter.emit("timeout_event",count);
    eventEmitter.emit("sayHello",count);
});
/*for(let i = 0;i < 5;i++)
{
    count++;
    eventEmitter.emit("timeout_event",count);
}*/
/*setTimeout(function () {
    count++;
    eventEmitter.emit("timeout_event",count);
},1000);*/
