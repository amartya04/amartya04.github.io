$(window).on("load",function(){
          
          $(".loader-wrapper").fadeOut("slow");
        });
$(window).on("click",function(){
         $(".enterb").html("WELCOME TO ANIMUS...");
          $(".entera").fadeOut(4000);
        });



window.addEventListener('DOMContentLoaded', Main);
//function Main() {
function Main(){

console.log("loaded");

document.querySelector(".faq").addEventListener("click",showfaq);
document.querySelector(".srch").addEventListener("click",aler);
return;
//document.querySelector(".marq").addEventListener("animationiteration", repfn);
};
function showfaq(event){
//console.log("parsed");
if(document.getElementById('showfaq').style.display=='block'){
	document.getElementById('showfaq').style.display='none';
	this.style.transform="rotate(0deg)";
	}
else{
	document.getElementById('showfaq').style.display='block'
	this.style.transform="rotate(180deg)";
};

};
// onclick="alert('Search Disabled !!!');"
function aler(event) {
	alert('Search Disabled !!!')
	return false; // to stop reload
};
