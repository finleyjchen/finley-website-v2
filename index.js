
sr.reveal('#wordpress');
sr.reveal('#seo');

sr.reveal('#webdev', { duration: 200 });
sr.reveal('.letter', { duration: 2000 }, 50);
sr.reveal('.services', {duration: 1000});
sr.reveal('#workhistory', {duration:200});
sr.reveal('#skills', {duration:200});
var scroll = new SmoothScroll('a[href*="#"]');
var b = baffle('.baffle', {
    characters: '{][][][][]<>101010{][12]}}',
    speed: 75
});

b.reveal(1000);

var c = baffle('.baffle1', {
  characters:'<{>/?[0\10{;1}]}',
  speed:100
});

var d = baffle('.wordChange', {
    characters:'<{>/?[0\10{;1}]}',
    speed:100
});

c.reveal(2000);
var textChanger = setInterval(revealText, 3000);
var verbs = ["create websites", "write about things", "play games"]
var arrayLength = verbs.length;
var currentVerb = 0;
revealText();

// loops through the list verbs and returns the current word.
// Resets at 0 when reaching the end of the list.
function revealText() {

    d.reveal(1000);
    d.text(function() {
        console.log(currentVerb);
        if(currentVerb == arrayLength) {
            currentVerb = 0;
        }
        var word = verbs[currentVerb];
        
        currentVerb++;
        return word;
    });
}

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},2000);
	});
});

var btn = document.getElementById("contactbtn");
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}


var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

