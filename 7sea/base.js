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
  addHero(gnsp.hero.nico);
  
  // Search
  $(document).on("keyup","#txtSearch",function(e){
    // timer searching
  });
});

function addHero(objHero){
  var heroHtml = '<div class="hero ' + objHero.gender.toLowerCase() + '  ' + objHero.nation + '">';
  heroHtml = heroHtml + '<div class="heroName">'+objHero.name+'</div>';
  heroHtml = heroHtml + '<<div class="virtHubr"><span class="virtue" descr="'+objHero.virtueDescr+'">'+objHero.virtue+'</span><span class="hubris" descr="'+objHero.hubrisDescr+'">'+objHero.hubris+'</span></div>';
  heroHtml = heroHtml + '<div class="bgrounds">';
  for(var bgrnd in objHero.background){
    heroHtml = heroHtml + '<span class="bground" descr="'+objHero.background[bgrnd]+'">'+bgrnd+'</span>';
  }
  heroHtml = heroHtml + '</div>';
  heroHtml = heroHtml + '<div class="traits">'+objHero.trait.brawn+'</div>';
  heroHtml = heroHtml + '<div class="skills">'+objHero.skill.athletics+'</div>';
  heroHtml = heroHtml + '<div class="advantages">'+objHero.advantage[0].name+'</div>';
  $("#heroes").append("");
}

function hideAll(){
  $("#heroes").hide();
  $("#plot").hide();
  $("#search").hide();
}
