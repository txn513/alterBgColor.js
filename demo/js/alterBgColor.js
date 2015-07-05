;(function($){
	$.fn.extend({
		"alterBgColor": function(options){
				options = $.extend({
					odd: "odd",
					even: "even",
					checked: "checked"
				}, options);
				var hasChecked = false;
				$("tbody>tr:odd", this).addClass(options.odd);
				$("tbody>tr:even", this).addClass(options.even);
				$("tbody>tr", this).click(function(){
					hasChecked = $(this).hasClass(options.checked);
					$(this)[hasChecked?"removeClass":"addClass"](options.checked)
					.find(":checkbox")
					.attr("checked", !hasChecked);
				});
				//默认选中元素高亮显示
				$("tbody>tr:has(:checked)").addClass(options.checked);
				return this;
		}
	});
})(jQuery)