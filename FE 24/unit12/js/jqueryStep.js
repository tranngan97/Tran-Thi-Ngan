$(function(){

	$(".code").click(function(){
		$(".code").css("display", "none");
		$(".noidung").css("display", "block");
		$(".tab").css("display", "block");
		$(".form").css("display", "block");
		$(".prev").css("background-color", "#ccc");
		$(".prev").css("color", "white");

	});
	$(".next").click(function(){
		var username= $("#userName").val();
		var pass = $("#pass").val();
		var repass= $("#rePass").val();
		if (username== ""){
			$(".form .ero1 p").text("This field is required");
			$(".form .ero1 p").css("color", "red");
			$(".form #userName").css("background-color", "pink");
			$(".tab .active").css("background-color", "red");

		};
		if(pass== ""){
			$(".form .ero2 p").text("This field is required");
			$(".form .ero2 p").css("color", "red");
			$(".form #pass").css("background-color", "pink");
			$(".tab .active").css("background-color", "red");
		};

		if (repass==""){
			$(".form .ero3 p").text("This field is required");
			$(".form .ero3 p").css("color", "red");
			$(".form #rePass").css("background-color", "pink");
			$(".tab .active").css("background-color", "red");

		};
		if ( (username!= "") && (pass!= "") && (repass!="")){
			$(".tab .active").removeClass("active");
			$(".tab").next().children().addClass("active");
			$(".form .active").removeClass("active");
			$(".form").next().children().find(".form1").addClass("active");

		};
	});
});
