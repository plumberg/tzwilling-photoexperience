
$(document).ready(function() {
	jQuery('.item-masonry').hover(function() {
		$(this).find(".cover-item-gallery").fadeIn();
	}, function() {
		$(this).find(".cover-item-gallery").fadeOut();
	});

	var sizer = '.sizer4';
	//show our plagin what is a width of our element
	var container = $('#gallery');
	container.imagesLoaded(//container will check if all the pics are loaded and if they are it will run our plugin
	function() {//it`s important to load all the pics first before our plagin runs
		container.masonry({
			itemSelector : '.item-masonry',
			columnWidth : sizer,
			percentPosition : true
		});
	});
});
