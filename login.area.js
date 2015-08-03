var tabMaster = false;

$('body').on('focus', '[data-tabmaster]', function() {

	tabMaster = $(this).attr('data-tabmaster');

});

$('body').on('keydown', '[data-tabto]', function(e) {

	var target = $(this).attr('data-tabto');

	if (e.which == 9 && !e.shiftKey && tabMaster == "true") {
		e.preventDefault();
		console.log('tab detected');
		$('#' + target).focus();
	} else if (e.shiftKey) {

		tabMaster = false;

	};

});
