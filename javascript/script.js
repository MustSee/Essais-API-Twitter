// Fait apparaître les tweets lorsque l'on clique sur le boutton afficher
$(function(){
  $("button").on("click", function(){
    $.ajax({
      type:"GET",
      url:"/api/affiche",
      success:function(data){
        $("#liste").html("<h1> Liste des tweets </h1>");
        for (var i=0; i<data.length;i++){
          $("#liste").append("<p>"+data[i]+"</p>");
        }
      }
    })
  })
});