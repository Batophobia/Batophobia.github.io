$(function(){
  // Draw res card from field
  $(document).on("click",".cardList td.fieldCard",function(){
    var fieldNo = $(this).index();
    player.drawRes(fieldNo);
  });
});
