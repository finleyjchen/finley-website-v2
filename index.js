
sr.reveal('#wordpress');
sr.reveal('#seo');

sr.reveal('#webdev', { duration: 200 });
sr.reveal('.letter', { duration: 2000 }, 50);
sr.reveal('.services', {duration: 1000});
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

c.reveal(2000);

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},2000);
	});
});
