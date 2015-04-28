jQuery(function($) {

	window.onpopstate = function(e){
		if(e.state){
			$('.site-content').html( $(e.state.html).find('.site-content').html() );
			document.title = e.state.pageTitle;
		}
	};

	$(document).on('click', '.navigation a', function(e) {

		e.preventDefault();
		var self = this;

		$('.site-content').addClass('paginating').animate({
			'opacity': 0
		}, 250, function() {
			$('html, body').animate({ scrollTop: 0 }, 250);
		});

		$.get( $(self).attr('href'), function(data) {

			document.title = $("<div/>").html( (/<title>(.*?)<\/title>/m).exec(data)[1] ).text();
			window.history.pushState({"html":data,"pageTitle":document.title},"", $(self).attr('href'));

			$('.site-content').html( $(data).find('.site-content').html() ).removeClass('paginating').animate({
					'opacity': 1
			}, 500);

		}).fail(function() { // Something went wrong, send the user on their way.
			window.location.href = $(self).attr('href');
		});

	});

});