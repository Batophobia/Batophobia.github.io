$(function() {
  // Menu
  $(document).on("click","#navHero",function(e){
    hideAll();
    $("#heroes").show();
  });
  $(document).on("click","#navPlot",function(e){
    hideAll();
    $("#plot").show();
  });
  $(document).on("click","#navLookup",function(e){
    hideAll();
    $("#search").show();
  });
  
  // Load heroes
  
  // Load plot
  
  // Add Player
  
  // Search
  $(document).on("keyup","#txtSearch",function(e){
    // timer searching
  });
});

function hideAll(){
  $("#heroes").hide();
  $("#plot").hide();
  $("#search").hide();
}
