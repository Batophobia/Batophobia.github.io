$(function(){
  $(document).on("click",".cardList td.fieldCard",function(){
    // Draw res card from field
    var fieldNo = $(this).index();
    player.drawRes(fieldNo);
  });
  
  $("#btnPoo").click(function(){
    // Make poo
    $(".everything").append('<div draggable="true" class="poo"></div>');
  });
  
  $("#btnWork").click(function(){
    // Make worker
    $(".everything").append('<div draggable="true" class="worker"></div>');
  });
});
