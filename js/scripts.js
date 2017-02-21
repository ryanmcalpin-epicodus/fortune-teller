$(function() {
  var unluckies = ["The end is near, and it's all your fault.", "You will die alone and poorly dressed.", "Don't go outside, ever."];
  var luckies = ["You will win the lottery!", "A thrilling time is in your immediate future!", "You will find a bushell of money!"];
  var neutrals = ["Two days from now, tomorrow will be yesterday.", "Try again.", "Your future is cloudy."]
  $("form").submit(function() {
    event.preventDefault();
    var luck = 0;
    $("input:checkbox[name=situations]:checked").each(function(){
      var luckiness = $(this).val();
      if (luckiness === "lucky") {
        luck++;
      } else {
        luck--;
      }
    });
    if (luck === 0) {
      alert(neutrals[Math.floor(Math.random()*neutrals.length)]);
    } else if (luck < 0){
      alert(unluckies[Math.floor(Math.random()*unluckies.length)]);
    } else {
      alert(luckies[Math.floor(Math.random()*luckies.length)]);
    }
  });
});
