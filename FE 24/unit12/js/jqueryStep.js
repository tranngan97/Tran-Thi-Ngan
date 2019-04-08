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
			$(".tab .active").css("background-color", " #00a1ff");
			$(".tab .active").addClass(function(){
				$(this).removeClass("active");
				$(this).next().addClass("active");

			});
			
			$(".form .active").addClass(function(){
				$(this).removeClass("active");
				$(this).next().addClass("active");

			});
			$(".prev").css("background-color", "#005aff");
			
		};
		if ($(".form").attr("class")== "proLi"){
			var firstname= $("#firstName").val();
			var lastname= $("#lastName").val();
			var email= $("#eMail").val();
			var add = $("#add").val();
			var agg= $("#agg").val();
			agg = parseInt(agg);
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

			if ( (firstname!= "") && (lastname!= "") && (email!="") && (add!="") && (agg !="")){
				$(".tab .active").addClass(function(){
					$(this).removeClass("active");
					$(this).next().addClass("active");
				});
				$(".tab .warning").css("background-color", "#ccc");
				$(".form .warning").css("display", "none");
				

				$(".form .active").addClass(function(){
					$(this).removeClass("active");
					$(this).next().addClass("active");
				
				});



			};
		};
		if ($(".form").children().attr("class")== "finish"){
			$(".next").css("background-color", "#ccc");
			$(".next").click(function(){
				

			});

		};

	});
	
});

