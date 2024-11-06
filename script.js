$(document).ready(function () {


	$("#stream1_btn").on("click", function () {
		$(".stream1").fadeToggle();
		$(".stream1").fadeToggle(2000);
	});
	// $("#stream1_btn").mouseleave(function () {
	// 	$(".stream1").show(5000);
	// });
	$("#stream2_btn").mouseleave(function () {
		$(".stream2").fadeTo(1000, 0.5);
	});
	$("#stream3_btn").on("click", function () {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});


}); 
