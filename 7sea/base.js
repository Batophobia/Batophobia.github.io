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
    $("#plot").append("<li for='"+step+"'><i class='arrow right' />"+gnsp.plot[step].name+"</li><div class='plotDetails' for='"+step+"'>"+gnsp.plot[step].descr+"</div>");
  }
  $(document).on("click","#plot li", function(){
    $(this).next().toggle();
    if($(this).find(".arrow").hasClass("right")){
      $(this).find(".arrow").removeClass("right");
      $(this).find(".arrow").addClass("down");
    } else {
      $(this).find(".arrow").removeClass("down");
      $(this).find(".arrow").addClass("right");
    }
  });
  
  // Search
  var srchTimer;
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
    if(!$(this).hasClass("trait") && !$(this).hasClass("skill") && ($(this).attr("descr")==null || $(this).attr("descr")==""))
      return false;
    
    $("#greyout").show();
    var popupHtml = "";
    popupHtml = popupHtml + "<div>";
    // Traits
    if($(this).hasClass("brawn")){
      popupHtml = popupHtml + "<h1>Brawn - " + $(this).attr('lvl') + "</h1>";
      popupHtml = popupHtml + "<div class='popupInfo'>" + base.trait.brawn + "</div>";
    } else if($(this).hasClass("finesse")) {
      popupHtml = popupHtml + "<h1>Finesse - " + $(this).attr('lvl') + "</h1>";
      popupHtml = popupHtml + "<div class='popupInfo'>" + base.trait.finesse + "</div>";
    } else if($(this).hasClass("resolve")) {
      popupHtml = popupHtml + "<h1>Resolve - " + $(this).attr('lvl') + "</h1>";
      popupHtml = popupHtml + "<div class='popupInfo'>" + base.trait.resolve + "</div>";
    } else if($(this).hasClass("wits")) {
      popupHtml = popupHtml + "<h1>Wits - " + $(this).attr('lvl') + "</h1>";
      popupHtml = popupHtml + "<div class='popupInfo'>" + base.trait.wits + "</div>";
    } else if($(this).hasClass("panache")) {
      popupHtml = popupHtml + "<h1>Panache - " + $(this).attr('lvl') + "</h1>";
      popupHtml = popupHtml + "<div class='popupInfo'>" + base.trait.panache + "</div>";
    } else {
      if($(this).hasClass("skill")){
        popupHtml = popupHtml + "<h1>"+$(this).text()+" - " + $(this).attr('lvl') + "</h1>";
      else
        popupHtml = popupHtml + "<h1>"+$(this).text()+"</h1>";
      // Skills
      if($(this).hasClass("aim")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.aim + "</div>";
      } else if($(this).hasClass("athletics")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.athletics + "</div>";
      } else if($(this).hasClass("brawl")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.brawl + "</div>";
      } else if($(this).hasClass("convince")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.convince + "</div>";
      } else if($(this).hasClass("empathy")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.empathy + "</div>";
      } else if($(this).hasClass("hide")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.hide + "</div>";
      } else if($(this).hasClass("intimidate")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.intimidate + "</div>";
      } else if($(this).hasClass("notice")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.notice + "</div>";
      } else if($(this).hasClass("perform")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.perform + "</div>";
      } else if($(this).hasClass("ride")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.ride + "</div>";
      } else if($(this).hasClass("sailing")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.sailing + "</div>";
      } else if($(this).hasClass("scholarship")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.scholarship + "</div>";
      } else if($(this).hasClass("tempt")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.tempt + "</div>";
      } else if($(this).hasClass("theft")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.theft + "</div>";
      } else if($(this).hasClass("warfare")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.warfare + "</div>";
      } else if($(this).hasClass("weaponry")){
        popupHtml = popupHtml + "<div class='popupInfo'>" + base.skill.weaponry + "</div>";
      } else {
        popupHtml = popupHtml + "<div class='popupInfo'>" + $(this).attr("descr") + "</div>";
      }
    }
    popupHtml = popupHtml + "<button id='btnClose'>Close</button>";
    popupHtml = popupHtml + "</div>";
    $(".popup").html(popupHtml);
  });
  
  $(document).on("click","#btnClose",function(){
    $(".popup").html("");
    $("#greyout").hide();
  });
});

var base={
  places: {
    vodacce: "",
    castille: "",
    inismore: "",
    alahnahquin: "",
    aksum: "",
    aragosta: ""
  },
  trait: {
    brawn: "Brawn is a Hero’s strength and physical power.",
    finesse: "Finesse measures a Hero’s coordination and agility.",
    resolve: "Resolve is a Hero’s willpower and endurance.",
    wits: "Wits measures how quickly a Hero thinks on his feet.",
    panache: "Panache is a Hero’s charm and personal magnetism."
  },
  skill: {
    aim: "Use Aim when you point a pistol at someone and pull the trigger. Use Aim when you throw a knife across a crowded room with pinpoint accuracy, whether your target is a person or an object.",
    athletics: "Use Athletics to swing across a room on a chandelier, jump from rooftop-to-rooftop, or otherwise perform a dangerous physical stunt.",
    brawl: "Use Brawl whenever you punch or kick someone in the face. Use Brawl when you grab someone and drag him down an alleyway.",
    convince: "Use Convince when you appeal to another character’s better nature. Use Convince when you assure someone you’re being completely honest with her and she should trust you.",
    empathy: "Use Empathy when you want to tell if someone is being genuine. Use Empathy when you determine someone’s general mental state—they’re afraid, they’re nervous, they’re angry.",
    hide: "Use Hide when you sneak through a dark room without the guard on watch seeing you. Use Hide when you keep a weapon or other item hidden, and avoid it being found if you are searched. Use Hide to attack an unsuspecting victim with a weapon or your fists. Use Hide to construct a disguise or camouflage a location.",
    intimidate: "Use Intimidate when you make someone do what you want under threat of some action from you, physical or otherwise.",
    notice: "Use Notice when you investigate a crime scene or search a Villain’s study for clues. Use Notice when you want to pick out fine details at a glance.",
    perform: "Use Perform when you try to captivate an audience with your showmanship. Use Perform to get across a particular message to your audience or to elicit a specific emotion from them through your performance—to make them laugh at your comedy, to make them weep at your tragedy, to rile them up with a motivational speech, etc.",
    ride: "Use Ride when you engage in a high-speed carriage chase. Use Ride when you ride a horse through the forest at a gallop.",
    sailing: "Use Sailing whenever you navigate your way through a ship’s rigging. Use Sailing when you attempt to steer a ship during a pitched battle at sea, or through a dangerously narrow channel.",
    scholarship: "Use Scholarship when you wax ecstatic about a certain subject matter, either from personal experience or teachings. Use Scholarship when you consult your knowledge to fill in the details on a certain subject. Use Scholarship when you call upon your medical training to tend to an injury.",
    tempt: "Use Tempt when you bribe someone to do something for you that she really shouldn’t agree to do. Use Tempt when you convince someone to give you a little 'alone time.'",
    theft: "Use Theft when you swipe something from someone’s pocket without him noticing. Use Theft when you pick a lock, crack a safe, or something similar.",
    warfare: "Use Warfare whenever you need tactical expertise, such as when you’re breaching a castle’s defense. Use Warfare when you lead an army in battle.",
    weaponry: "Use Weaponry when you attack something with a sword, axe, hammer or knife in your hand."
  },
  glamours: "All Glamours require a Hero Point to activate. Major Glamours can be activated once per Episode, while Minor Glamours can be activated once per Scene.",
  iethihsothokon: "At the beginning of each Scene you may attune your spirit to one Iethihsothókon you know at no cost. Until you attune to a different Iethihsothókon you have access to its associated Iáhthénen, and may activate its associated Iónhnhe by spending a Hero Point. At the beginning of each new Round, an Akwékon may freely attune to a different Iethihsothókon, gaining access to that Iethihsothókon’s Iáhthénen and Iónhnhe. Additionally, an Akwékon may attune to a different Iethihsothókon during a Scene by spending one Raise."
};

function searchJson(needle, haystack){
  for(var k in haystack){
    if(typeof(haystack[k]) === 'object'){
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
  heroHtml = heroHtml + '<span lvl="'+objHero.trait.brawn+'" class="trait brawn t'+objHero.trait.brawn+'">B</span>';
  heroHtml = heroHtml + '<span lvl="'+objHero.trait.finesse+'" class="trait finesse t'+objHero.trait.finesse+'">F</span>';
  heroHtml = heroHtml + '<span lvl="'+objHero.trait.resolve+'" class="trait resolve t'+objHero.trait.resolve+'">R</span>';
  heroHtml = heroHtml + '<span lvl="'+objHero.trait.wits+'" class="trait wits t'+objHero.trait.wits+'">W</span>';
  heroHtml = heroHtml + '<span lvl="'+objHero.trait.panache+'" class="trait panache t'+objHero.trait.panache+'">P</span>';
  heroHtml = heroHtml + '</div>';
  // Skills
  heroHtml = heroHtml + '<div class="skills">';
  for(var skill in objHero.skill){
    heroHtml = heroHtml + '<span lvl="'+objHero.skill[skill]+'" class="skill '+skill+' t'+objHero.skill[skill]+'">'+capital(skill)+'</span>';
  }
  heroHtml = heroHtml + '</div>';
  // Advantages
  heroHtml = heroHtml + '<div class="advantages">';
  for(var adv in objHero.advantage){
    heroHtml = heroHtml + '<span class="adv" descr="'+objHero.advantage[adv].descr+'">'+objHero.advantage[adv].name+'</span>';
  }
  heroHtml = heroHtml + '</div>';
  if(objHero.glamours!==undefined){
    heroHtml = heroHtml + '<div class="glamours">';
    for(var g in objHero.glamours){
      heroHtml = heroHtml + '<span class="glamour '+objHero.glamours[g].type+'" descr="'+objHero.glamours[g].descr+'">'+capital(g)+'</span>';
    }
    heroHtml = heroHtml + '</div>';
  }
  if(objHero.iethihsothokon!==undefined){
    heroHtml = heroHtml + '<div class="iethihsothokons">';
    for(var i in objHero.iethihsothokon){
      heroHtml = heroHtml + '<span class="iethihsothokon" descr="'+objHero.iethihsothokon[i].descr+'">'+capital(i)+'('+objHero.iethihsothokon[i].type+')</span>';
    }
    heroHtml = heroHtml + '</div>';
  }
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
