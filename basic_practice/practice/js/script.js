
$(function(){
  
    $(".btn").on("click",()=>{
        $("#slide").slideToggle();
    })
    $("#slide").slick({
    autplay: true,
    autoplaySpeed: 2000,
    dots:true});
  
  
  });