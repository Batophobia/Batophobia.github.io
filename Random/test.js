$("#txtPeople").val("David Starkey\nChristina Starkey\nChris Farhner\nDiane Starkey\nValca Castillo");
$("#btnUpdate").click();
$(".numEntry[for='Christina Starkey']").val(50);
$(".numEntry[for='Valca Castillo']").val(25);

var ti=0;

function doWin(){
	ti++;
  $("#btnPick").click();
  setTimeout(function(){
		$("#closeWin").click();
    doWin();
	},500);
}

doWin();
