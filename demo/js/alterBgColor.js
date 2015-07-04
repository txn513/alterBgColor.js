;(function($){
	$.fn.extend({
		"alterBgColor": function(options){
				options = $.extend({
					odd: "odd",
					even: "even",
					checked: "checked"
				}, options);
				$("tbody>tr:odd", this).addClass(options.odd);
				$("tbody>tr:even", this).addClass(options.even);
				$("tbody>tr", this).click(function(){
					var hasChecked = $(this).attr("checked");;
					$(this)[hasChecked?"removeClass":"addClass"](options.checked)
					.attr("checked", !hasSelected);
				});
				//默认选中元素高亮显示
				$("tbody>tr:has(:checked)").addClass(options.checked);
		}
	});
})(jquery)