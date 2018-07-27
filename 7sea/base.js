$(function() {
  // Menu
  $(document).on("click","#navHero",function(e){
    hideAll();
    $("#heroes").show();
    $("#addHero").show();
  });
  $(document).on("click","#addHero",function(e){
    $("#greyout").show();
    var popupHtml = "";
    popupHtml = popupHtml + "<div>";
    popupHtml = popupHtml + "<select>";
    popupHtml = popupHtml + "<option value=''>-- Select a Hero --</option>";
    for(var h in gnsp.hero){
      // TODO: check that hero not already in
      popupHtml = popupHtml + "<option value='"+h+"'>"+gnsp.hero[h].name+"</option>";
    }
    popupHtml = popupHtml + "<select>";
    popupHtml = popupHtml + "</select>";
    popupHtml = popupHtml + "</div>";
    $("#popup").html("<select></select>");
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
  // Name
  heroHtml = heroHtml + '<div class="heroName">'+objHero.name+'</div>';
  // Virtue and Hubris
  heroHtml = heroHtml + '<<div class="virtHubr"><span class="virtue" descr="'+objHero.virtueDescr+'">'+objHero.virtue+'</span><span class="hubris" descr="'+objHero.hubrisDescr+'">'+objHero.hubris+'</span></div>';
  // Backgrounds
  heroHtml = heroHtml + '<div class="bgrounds">';
  for(var bgrnd in objHero.background){
    heroHtml = heroHtml + '<span class="bground" descr="'+objHero.background[bgrnd]+'">'+bgrnd+'</span>';
  }
  heroHtml = heroHtml + '</div>';
  // Traits
  heroHtml = heroHtml + '<div class="traits">';
  heroHtml = heroHtml + '<span class="trait brawn t'+objHero.trait.brawn+'">B</span>';
  heroHtml = heroHtml + '<span class="trait finesse t'+objHero.trait.finesse+'">F</span>';
  heroHtml = heroHtml + '<span class="trait resolve t'+objHero.trait.resolve+'">R</span>';
  heroHtml = heroHtml + '<span class="trait wits t'+objHero.trait.wits+'">W</span>';
  heroHtml = heroHtml + '<span class="trait panache t'+objHero.trait.panache+'">P</span>';
  heroHtml = heroHtml + +'</div>';
  // Skills
  heroHtml = heroHtml + '<div class="skills">';
  for(var skill in objHero.skill){
    heroHtml = heroHtml + '<span class="skill '+skill+' t'+objHero.skill[skill]+'">'+capital(skill)+'</span>';
  }
  heroHtml = heroHtml + '</div>';
  // Advantages
  heroHtml = heroHtml + '<div class="advantages">';
  for(var adv in objHero.advantage){
    heroHtml = heroHtml + '<span class="adv" descr="'+objHero.advantage[adv].descr+'">'+objHero.advantage[adv].name+'</span>';
  }
  heroHtml = heroHtml + '</div>';
  $("#heroes").append(heroHtml);
}

function hideAll(){
  $("#heroes").hide();
  $("#plot").hide();
  $("#search").hide();
  $("#addHero").hide();
}

function capital(input){
  return input.charAt(0).toUpperCase() + input.slice(1);
}
