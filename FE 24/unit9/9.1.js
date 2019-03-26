var change = document.getElementsByTagName("p")[0];

document.getElementsByClassName("MacDinh")[0].addEventListener("click", function(){
	var fontsize = change.style.fontSize;
	change.style.fontSize="20px";
});

document.getElementsByClassName("lon")[0].addEventListener("click", function(){
	var fontsize = change.style.fontSize;
	fontsize= parseFloat(fontsize);
	fontsize =fontsize*1.4;
	change.style.fontSize=fontsize+"px";
});

document.getElementsByClassName("nho")[0].addEventListener("click", function(){
	var fontsize = change.style.fontSize;
	fontsize= parseFloat(fontsize);
	fontsize =fontsize/1.4;
	change.style.fontSize=fontsize+"px";
});
