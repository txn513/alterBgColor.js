;(function($){
	$.fn.extend({
		"alterBgColor": function(options){
				options = $.extend({
					odd: "odd",
					even: "even",
					selected: "selected"
				}, options);
		}
	});
})(jquery)