$(function() {
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
      alert("neutral");
    } else if (luck < 0){
      alert("unlucky");
    } else {
      alert("lucky");
    }
  });
});
