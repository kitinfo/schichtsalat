var user = "";
var pass = "";
var selectedEvent;

function init() {
	initEvents();
	selectedEvent = "0";
	getEvents(reloadEvents, user, pass);
}

function reloadEvents(events) {

	var ec = document.getElementById('eventlist');
	for (i in events) {

		var elem = document.createElement('option');
		elem.setAttribute('onClick', 'eventClicked(' + events[i].id + ')');
		/*elem.setAttribute('class', 'eventlistelem');
		if (selectedEvent == i) {
			elem.setAttribute('id','selectedEvent');
		}*/
		elem.innerHTML = events[i].name;
		ec.appendChild(elem);
	}
	
	

}

function toggleEventList() {
	
	var list = document.getElementById('eventlist');
	var elems = list.getElementsByTagName('li');
	for (var i = 0; i < elems.length; i++) {
	var elem = elems[i];
	console.log(elem);
	if (elem.style.display == 'list-item') {
		elem.style.display = 'none';
	} else {
	elem.style.display = 'list-item';
	}
	}
	document.getElementById('selectedEvent').style.display = 'list-item';
}


window.onload = init;
