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
			$(".tab .active").addClass(function(){
				$(this).removeClass("active");
				$(this).next().addClass("active");

			});
			
			$(".form .active").addClass(function(){
				$(this).removeClass("active");
				$(this).next().addClass("active");
			});
		};
		});
	$(".next").click(function(){
		var firstname= $("#firstName").val();
		var lastname= $("#lastName").val();
		var email= $("#eMail").val();
		var add = $("#add").val();
        var agg= $("#agg").val();
        if (firstname== ""){
			$(".form .ero4 p").text("This field is required");
			$(".form .ero4 p").css("color", "red");
			$(".form #firstName ").css("background-color", "pink");
			$(".tab .active").css("background-color", "red");

		};
		if(lastname== ""){
			$(".form .ero5 p").text("This field is required");
			$(".form .ero5 p").css("color", "red");
			$(".form #lastName").css("background-color", "pink");
			$(".tab .active").css("background-color", "red");
		};
		if (email==""){
			$(".form .ero6 p").text("This field is required");
			$(".form .ero6 p").css("color", "red");
			$(".form #eMail").css("background-color", "pink");
			$(".tab .active").css("background-color", "red");

		};

		if (add==""){
			$(".form .ero7 p").text("This field is required");
			$(".form .ero7 p").css("color", "red");
			$(".form #add").css("background-color", "pink");
			$(".tab .active").css("background-color", "red");

		};
		if (agg > 18){
			$(".tab .warning").removeClass("active");
			$(".tab .finish").addClass("active");
			$(".form1 .warning").removeClass("active");
			$(".form1 .finish").addClass("active");

		};
		if ( (firstname!= "") && (lastname!= "") && (email!="") && (add!="")){
			$(".tab .active").addClass(function(){
				$(this).removeClass("active");
				$(this).next().addClass("active");

			});
			
			$(".form .active").addClass(function(){
				$(this).removeClass("active");
				$(this).next().addClass("active");
			});
		};
	});

	
});
