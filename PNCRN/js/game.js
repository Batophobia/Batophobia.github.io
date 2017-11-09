$(function(){
  $(document).on("click",".cardList td.fieldCard",function(){
    // Draw res card from field
    var fieldNo = $(this).index();
    player.drawRes(fieldNo);
  });
  
  $("#btnPoo").click(function(){
    // Make poo
    var num = $(".poo").length;
    $(".everything").append('<div draggable="true" class="poo" id="poo'+num+'"></div>');
    $("#poo"+num).draggable();
  });
  
  $("#btnWork").click(function(){
    // Make worker
    var num = $(".worker").length;
    $(".everything").append('<div draggable="true" class="worker" id="worker'+num+'"></div>');
    $("#worker"+num).draggable();
  });
});
