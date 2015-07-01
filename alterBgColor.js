;(function($){
	$.fn.extend({
		"alterBgColor": function(options){
				options = $.extend({
					odd: "odd",
					even: "even",
					selected: "selected"
				}, options);
				$("tbody>tr:odd", this).addClass(options.odd);
				$("tbody>tr:even", this).addClass(options.even);
				$("tbody>tr", this).click(function(){
					var hasSelected = $(this).selected;
					$(this)[hasSelected?"removeClass":"addClass"](options.selected);
					$(this).attr("check", !hasSelected);
				});
		}
	});
})(jquery)