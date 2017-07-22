$(function() {
	$(".selectBtn").on("click", function(e) {
		e.stopPropagation(), $(this).next().hasClass("hide") ? ($(".selectPanel").addClass("hide"), $(this).next().removeClass("hide")) : $(this).next().addClass("hide")
	}), $(document).on("click", function() {
		$(".selectPanel").addClass("hide")
	})
});