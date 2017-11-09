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
    var dm = $("#poo"+num)[0];
    dm.addEventListener('dragstart', drag_start, false);
	  document.body.addEventListener('dragover', drag_over, false);
	  document.body.addEventListener('drop', drop, false);
  });
  
  $("#btnWork").click(function(){
    // Make worker
    var num = $(".worker").length;
    $(".everything").append('<div draggable="true" class="worker" id="worker'+num+'"></div>');
    var dm = $("#worker"+num)[0];
    dm.addEventListener('dragstart', drag_start, false);
	  document.body.addEventListener('dragover', drag_over, false);
	  document.body.addEventListener('drop', drop, false);
  });
});

// https://stackoverflow.com/a/36161139/1618257
function drag_start(event) {
	var style = window.getComputedStyle(event.target, null);
	event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.getAttribute('data-item'));
}
function drag_over(event) {
	event.preventDefault();
	return false;
}
function drop(event) {
	var offset = event.dataTransfer.getData("text/plain").split(',');
	var dm = document.getElementsByClassName('dragme');
	dm[parseInt(offset[2])].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
	dm[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
	event.preventDefault();
	return false;
}
