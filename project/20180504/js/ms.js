var tim=1;
setInterval("tim++",100);
var autourl=new Array();
for(i=1;i<=10;i++){
autourl[i-1]=$('.speedlist li').eq(i-1).find('a').attr("href");
}
function auto(url){
	var str=tim*10;
	for(i=1;i<=10;i++){
		if(url==autourl[i-1]){
			$('.speedlist li').eq(i-1).find('.ms').html(str+'ms')
		}
	}	
}
function run(){
	for(var i=1;i<autourl.length;i++){
		document.write("<img src="+autourl[i-1]+"/"+Math.random()+" width=1 height=1 onerror=auto('"+autourl[i-1]+"') style='display:none'>");
	}
}
run();