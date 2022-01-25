document.querySelector('#buttons').a.addEventListener("click", function(){showFact(0)});
document.querySelector('#buttons').b.addEventListener("click", function(){showFact(1)});
document.querySelector('#buttons').c.addEventListener("click", function(){showFact(2)});
document.querySelector('#buttons').d.addEventListener("click", function(){showFact(3)});
document.querySelector('#buttons').e.addEventListener("click", function(){showFact(4)});

const facts = [
	"It is illegal in California to lick toads. Apparently, some people were licking" + "<br>" + "toads to get high. Unfortunately, some people were being harmed by the" + "<br>" + "toads’ poison.",
	"In Mohave County, Arizona, if anyone is caught stealing soap, he must wash" + "<br>" + "himself with it until the soap is gone.",
	"In Connecticut a pickle must be able to bounce.",
	"In Kentucky, carrying ice cream cones in your pocket is illegal.",
	"In Wilbur, Washington, it's  illegal to ride a horse that is deemed to be ugly"
];
const images = [
	"<img src='images/fact1.jpg' alt='ugly toad'>",
	"<img src='images/fact2.jpg' alt='rubber duck in bubbles'>",
	"<img src='images/fact3.jpg' alt='pickles'>",
	"<img src='images/fact4.jpg' alt='ice cream'>",
	"<img src='images/fact5.jpg' alt='donkey'>",
];

function showFact(factNum){
	document.querySelector('section').innerHTML = facts[factNum] + "<br><br>" + images[factNum];
}

document.querySelector('#themes').light.addEventListener("click", function(){changeTheme(0)});
document.querySelector('#themes').dark.addEventListener("click", function(){changeTheme(1)});
document.querySelector('#themes').christmas.addEventListener("click", function(){changeTheme(2)});

function changeTheme(theme){
	if(theme == 0){
	document.querySelector('link').setAttribute("href", "light.css");
	}
	else if(theme == 1){
	document.querySelector('link').setAttribute("href", "dark.css");
	}
	else if(theme == 2){
	document.querySelector('link').setAttribute("href", "christmas.css");
	}
}