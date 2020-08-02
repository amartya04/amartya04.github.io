$(window).on("load",function(){
          
          $(".loader-wrapper").fadeOut("slow");
        });
$(window).on("click",function(){
        /* $(".enterb").html("WELCOME TO ANIMUS...");*/
          $(".entera").fadeOut(3000);
        });




window.addEventListener('DOMContentLoaded', Main);
//function Main() {
function Main(){


console.log("loaded");
$(window).scroll(scrollfn);
document.querySelector(".faq").addEventListener("click",showfaq);
document.querySelector(".srch").addEventListener("click",aler);
document.querySelector(".xpndnv").addEventListener("click",xpndnvf);
document.querySelector(".trivrap").addEventListener("click",trivrapf);
document.querySelector(".animrap").addEventListener("click",animrapf);
return;
//document.querySelector(".marq").addEventListener("animationiteration", repfn);
};
function scrollfn(event) {
	
    if ($(document).scrollTop() > 50) {
      $(".navbar").css('background-image','linear-gradient(to right, #1a0136f1, #100145f1)');
    } else {
      $(".navbar").css('background-image','linear-gradient(to right, rgba(1,1,1,0), rgba(1,1,1,0)');
    }
  };
function xpndnvf(event) {
      $(".navbar").css('background-image','linear-gradient(to right, #1a0136ff, #100145ff)');
  };

function trivrapf(event) {

       $(".trivrap").fadeOut(3000);
       $(".vistri").css('display', 'block');
      
  };
  function animrapf(event) {

       $(".animrap").fadeOut(3000);
        $(".visani").css('display', 'block');
      
       
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
/*
 $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $("p").addClass("test");
    } else {
      $("p").removeClass("test");
    }
  });
});

*/