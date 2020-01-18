
// use for loop!!!! 
$(".delete").eq(0).click(function (){
  $("li").eq(0).hide();
  var music2= new Audio("audio/Cave.mp3");
  music2.play();
  $("label").text("Hide all topics").css("color","red")
        .fadeOut(200)
        .fadeIn(200)
        .fadeOut(200)
        .fadeIn(200)
        .fadeOut(200)
        .fadeIn(200);
      
        
})
$("#hide").eq(0).click(function () {
  $("li").show();
 });


$(".delete").eq(1).click(function(){
  $("li").eq(1).hide();
  var music2= new Audio( "audio/Cave.mp3");
        music2.play();
  $("label").text("Hide all topics").css("color","red")
        .fadeOut(200)
        .fadeIn(200)
        .fadeOut(200)
        .fadeIn(200)
        .fadeOut(200)
        .fadeIn(200);
});
$("#hide").eq(1).click(function () {
  $("li").show();
});

$(".delete").eq(2).click(function () {
  $("li").eq(2).hide();
  var music2= new Audio( "audio/Cave.mp3");
  music2.play();
  $("label").text("Hide all topics").css("color","red")
        .fadeOut(200)
        .fadeIn(200)
        .fadeOut(200)
        .fadeIn(200)
        .fadeOut(200)
        .fadeIn(200);
});
$("#hide").eq(2).click(function () {
  $("li").show();
});


$(".delete").eq(3).click(function () {
  $("li").eq(3).hide();
  var music2= new Audio( "audio/Cave.mp3");
  music2.play();
  $("label").text("Hide all topics").css("color","red")
        .fadeOut(200)
        .fadeIn(200)
        .fadeOut(200)
        .fadeIn(200)
        .fadeOut(200)
        .fadeIn(200);
});
$("#hide").eq(3).click(function () {
  $("li").show();
});



// to add two span inside list
$("form").submit(function (e) {
  if ($(".input").val() !== "") {
    var inputText = $(".input").val();
    var spanText = "delete";
    var spans =
      "<li>" +
      ("<span class='name'>" + inputText + "</span>") +
      ("<span class='delete'>" + spanText + "</span>") +
      "</li>";

    $("ul").append(spans);
    $(".delete").eq(4).click(function () {
      $("li").eq(4).hide();
      var music2= new Audio( "audio/Cave.mp3");
      music2.play();
      $("label").text("Hide all topics").css("color","red")
        .fadeOut(200)
        .fadeIn(200)
        .fadeOut(200)
        .fadeIn(200)
        .fadeOut(200)
        .fadeIn(200);
      
    });
    $("#hide").eq(4).click(function () {
      $("li").show();
    });
    $(".delete").eq(5).click(function () {
      $("li").eq(5).hide();
      var music2= new Audio( "audio/Cave.mp3");
      music2.play();
      $("label").text("Hide all topics").css("color","red")
      .fadeOut(200)
      .fadeIn(200)
      .fadeOut(200)
      .fadeIn(200)
      .fadeOut(200)
      .fadeIn(200);
      
    });
    $("#hide").eq(5).click(function () {
      $("li").show();
    });

    $(".input").val("");
  }
  return false;
});

// to hide all topics and show again

$(function () {
  $("#hide").click(function () {
    if ($(this).is(":checked")) {
      var music2= new Audio( "audio/Cave.mp3");
        music2.play();
      $("ul").hide();
      $("label")
        .text("Show all topics")
        .css("color", "red");
      $("label")
        .fadeOut(200)
        .fadeIn(200)
        .fadeOut(200)
        .fadeIn(200)
        .fadeOut(200)
        .fadeIn(200);
    } else {
      var music1= new Audio( "audio/News.mp3");
        music1.play();
      $("label")
        .text("Hide all topics")
        .css("color", "#444");
      $("ul").show();
    }
  });
});

//  search words,letters

$(".input1").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $("ul li").filter(function () {
  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    
  });
});

// HIGHLIGHT FUNCTION. DO IT AGAIN

// $("input").keyup(function(){
//   searchHighlight($(this).val())
// })
// var searchText=$('.input').val();
// function searchHighlight(searchText){
//   if (searchText){
//     var searchExp=new RegExp(searchText,'ig')
//     var content=$("ul li").text();
//     var matches=content.match(searchExp);
//     if(matches){
//       $("ul li").html(content.replace(searchExp, function(match){
//         return "<span class='highlight'>"+match+"</span>"
//       }))
//     }
//   }
  
// }















