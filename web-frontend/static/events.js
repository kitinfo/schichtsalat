// @include static/ajax.js
var EVENTSURL = "api.php?events";

var events;
var eventChange;
var cb;

function initEvents() {
	events = [];
	eventChange = new Event('onEventChange');
}


function Event(id, name, description) {

	this.id = id;
	this.name = name;
	this.description = description;
}



function getEvents(callback, user, pass) {
	cb = callback;	
	request = ajax.asyncGet(EVENTSURL, loadEvents, errorEvents, 
user, pass);
	console.log("ok");

}

function loadEvents(request) {
	console.log("set events and lets go");
	var evs = JSON.parse(request.responseText);
	console.log(evs);
	/*for (i in evs.events) {
		console.log(i);
		ev = evs.events[i];
		events.push(new Event(ev.id, ev.name, ev.description));
	}*/
	cb(evs.events);
}

function errorEvents(request) {
	console.log("error");
}
