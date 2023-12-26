function enquire () {
	//
}

window.document.onload = function(e){
  mixpanel.track("Loaded");
}

function workUp(){
  ga('send', 'event', 'work', 'up', 'Fall Campaign');
  mixpanel.track("Work Up");

  Velocity(document.getElementById('works'), {height:"0px",display:"block", translateY:"-200px"}, {duration:0});
  document.querySelector("#works").setAttribute("style","display:block");
  Velocity(document.getElementById('heroAnim'), {opacity:"0",display:"none"}, {duration:300,complete: function(elements) {
  	Velocity(document.getElementById('works'), { height:"100%",opacity:1,translateY:"0px"}, {duration: 500,easing:"easeOutQuint"});
  }});
}

function hideWorks(){
  ga('send', 'event', 'work', 'down', 'Fall Campaign');
  mixpanel.track("Work Down");

  document.querySelector("#heroAnim").setAttribute("style","display:block");
  Velocity(document.getElementById('works'), {height:"0px",translateY:"-200px" }, {duration:900,easing:"easeOutQuint",complete: function(elements) {
  	document.querySelector("#works").setAttribute("style","display:none");

  	Velocity(document.getElementById('heroAnim'), {opacity:1 }, {duration:100});
  }});
}

function hideContact(){

  ga('send', 'event', 'contact', 'down', 'Fall Campaign');
  mixpanel.track("Contact Down");

  document.querySelector("#heroAnim").setAttribute("style","display:block");
  Velocity(document.getElementById('contact'), {height:"0px",translateY:"-200px" }, {duration:900,easing:"easeOutQuint",complete: function(elements) {
  	document.querySelector("#contact").setAttribute("style","display:none");

  	Velocity(document.getElementById('heroAnim'), {opacity:1 }, {duration:100});
  }});
}

function contactUp(){

  ga('send', 'event', 'contact', 'up', 'Fall Campaign');
  mixpanel.track("Contact Up");

  Velocity(document.getElementById('contact'), {height:"0px",display:"block", translateY:"-200px"}, {duration:0});
  document.querySelector("#contact").setAttribute("style","display:block");
  Velocity(document.getElementById('heroAnim'), {opacity:"0",display:"none"}, {duration:300,complete: function(elements) {
  	Velocity(document.getElementById('contact'), { height:"100%",opacity:1,translateY:"0px"}, {duration: 500,easing:"easeOutQuint"});
  }});  
}
