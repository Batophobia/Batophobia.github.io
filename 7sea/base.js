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
    popupHtml = popupHtml + "<h1>Add Hero</h1>";
    popupHtml = popupHtml + "<select id='ddlHeroes'>";
    popupHtml = popupHtml + "<option value=''>-- Select a Hero --</option>";
    for(var h in gnsp.hero){
      if($(".hero."+h).length<1)
        popupHtml = popupHtml + "<option value='"+h+"'>"+gnsp.hero[h].name+"</option>";
    }
    popupHtml = popupHtml + "</select>";
    popupHtml = popupHtml + "<button id='btnAddHero'>Add</button>";
    popupHtml = popupHtml + "</div>";
    $(".popup").html(popupHtml);
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
  $(document).on("click","#btnAddHero",function(e){
    if($("#ddlHeroes").val()=="")
      return false;
    
    addHero(gnsp.hero[$("#ddlHeroes").val()], $("#ddlHeroes").val());
    
    $(".popup").html("");
    $("#greyout").hide();
  });
  
  // Load plot
  for(var step in gnsp.plot){
    $("#plot").append("<li>"+gnsp.plot[step].name+"</li>");
  }
  
  // Search
  $("#txtSearch").keyup(function(e){
    clearTimeout(srchTimer);
    
    srchTimer = setTimeout(function () {
      if ($(inputElem).val() == "") {
        elemResults.html("");
        //elemResults.hide();
        return false;
      }
      
      var input=$(this).val();
      searchJson(input,gnsp);
    }, 300);
  });
  
  $(document).on("click",".hero span", function(e){
    if($(this).attr("descr")==null || $(this).attr("descr")=="")
      return false;
    
    $("#greyout").show();
    var popupHtml = "";
    popupHtml = popupHtml + "<div>";
    if($(this).hasClass("brawn"))
      popupHtml = popupHtml + "<h1>Brawn</h1>";
    else if($(this).hasClass("finesse"))
      popupHtml = popupHtml + "<h1>Finesse</h1>";
    else if($(this).hasClass("resolve"))
      popupHtml = popupHtml + "<h1>Resolve</h1>";
    else if($(this).hasClass("wits"))
      popupHtml = popupHtml + "<h1>Wits</h1>";
    else if($(this).hasClass("panache"))
      popupHtml = popupHtml + "<h1>Panache</h1>";
    else
      popupHtml = popupHtml + "<h1>"+$(this).text()+"</h1>";
    popupHtml = popupHtml + "<div class='popupInfo'>" + $(this).attr("descr") + "</div>";
    popupHtml = popupHtml + "<button id='btnClose'>Close</button>";
    popupHtml = popupHtml + "</div>";
    $(".popup").html(popupHtml);
  });
  
  $(document).on("click","#btnClose",function(){
    $(".popup").html("");
    $("#greyout").hide();
  });
});

function searchJson(needle, haystack){
  for(var k in haystack){
    if(typeof(haystack[k]){
       searchJson(needle, haystack[k]);
    }
  }
}
    
function addHero(objHero, varName){
  var heroHtml = '<div class="hero ' + varName + ' ' + objHero.gender.toLowerCase() + '  ' + objHero.nation + '">';
  // Name
  heroHtml = heroHtml + '<div class="heroName">'+objHero.name+'</div>';
  // Virtue and Hubris
  heroHtml = heroHtml + '<div class="virtHubr"><span class="virtue" descr="'+objHero.virtueDescr+'">'+objHero.virtue+'</span><span class="hubris" descr="'+objHero.hubrisDescr+'">'+objHero.hubris+'</span></div>';
  // Backgrounds
  heroHtml = heroHtml + '<div class="bgrounds">';
  for(var bgrnd in objHero.background){
    heroHtml = heroHtml + '<span class="bground" descr="'+objHero.background[bgrnd]+'">'+capital(bgrnd)+'</span>';
  }
  heroHtml = heroHtml + '</div>';
  // Traits
  heroHtml = heroHtml + '<div class="traits">';
  heroHtml = heroHtml + '<span class="trait brawn t'+objHero.trait.brawn+'">B</span>';
  heroHtml = heroHtml + '<span class="trait finesse t'+objHero.trait.finesse+'">F</span>';
  heroHtml = heroHtml + '<span class="trait resolve t'+objHero.trait.resolve+'">R</span>';
  heroHtml = heroHtml + '<span class="trait wits t'+objHero.trait.wits+'">W</span>';
  heroHtml = heroHtml + '<span class="trait panache t'+objHero.trait.panache+'">P</span>';
  heroHtml = heroHtml + '</div>';
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
  if(input.indexOf('_')>-1){
    input = input.replace('_',' ');
    input = input.replace(/\s[a-z]/g,function(c){ return c.toUpperCase(); });
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}
