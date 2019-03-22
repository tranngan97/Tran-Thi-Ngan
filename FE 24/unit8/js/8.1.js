
var dem;
dem=parseInt(dem);
dem=0;
for (i=1; i<=100; i++ ){
	if (i%3==0 || i%7==0)
		dem = dem+1;
}
		document.write("số các số nguyên từ 1 đến 100 chia hết cho 3 và 7 là: " + dem);

