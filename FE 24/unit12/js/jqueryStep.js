$(function(){

	$(".code").click(function(){
		$(".code").css("display", "none");
		$(".noidung").css("display", "block");
		$(".tab").css("display", "block");
		$(".form").css("display", "block");
		$(".form .active").css("display", "block");
		$(".prev").css("background-color", "#ccc");
		$(".prev").css("color", "white");

	});
	$(".next").click(function(){
		var username= $("#userName").val();
		var pass = $("#pass").val();
		var repass= $("#rePass").val();
		if (username== ""){
			$(".form .ero p").text("This field is required");
			$(".form .ero p").css("color", "red");
			$(".form input").css("background-color", "pink");
			$(".tab .active").css("background-color", "red");

		};
		if(pass== ""){
			$(".form .ero p").text("This field is required");
			$(".form .ero p").css("color", "red");
			$(".form input").css("background-color", "pink");
			$(".tab .active").css("background-color", "red");
		};

		if (repass==""){
			$(".form .ero p").text("This field is required");
			$(".form .ero p").css("color", "red");
			$(".form input").css("background-color", "pink");
			$(".tab .active").css("background-color", "red");

		};
		if ( (username!= "") && (pass!= "") && (repass!="")){
			$(".tab .active").removeClass("active");
			$(".tab").next().children().addClass(".active");
			$(".form .active").removeClass("active");
			$(".form").next().children(".form1").addClass(".active");

		};
	});
});
