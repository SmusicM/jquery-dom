//$(document).ready(function(){
    $("form").submit(function(e){
       e.preventDefault();
      //const inputVal = $("input").val();
      //$("ol").append("li" + inputVal + "</li>");
      //$("ol").append($("<li>" + $("nput").val() + "</li>"));
      $("ol").append($("<li><?li>").innerHTML($("input").val()));
    })
///})