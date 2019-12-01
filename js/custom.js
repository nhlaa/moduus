//nice scroll
$("html").niceScroll();


//slideshow
var i = 0;
var slideimages = ["imgs/photo-1457305237443-44c3d5a30b89.jpg","imgs/photo-1511376777868-611b54f68947.jpg","imgs/photo-1467232004584-a241de8bcf5d.jpg"];

var slideshow = function(){
    
    document.slideshow.src = slideimages[i];
    if(i < slideimages.length - 1){
        i++;
    }else{
        i = 0; 
    }
    setTimeout("slideshow()", 5000);
}
 
slideshow();

//slider
		$(function() {
		$('#dg-container').gallery({
		autoplay	:	true
	});
});