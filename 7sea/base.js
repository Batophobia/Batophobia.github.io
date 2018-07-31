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
  $(document).on("click","#navNPC",function(e){
    hideAll();
    $("#npc").show();
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
    var tmpHtml = "";
    tmpHtml = tmpHtml + "<li for='"+step+"'><i class='arrow right' />"+gnsp.plot[step].name+"</li>";
    tmpHtml = tmpHtml + "<div class='plotDetails' for='"+step+"'>"+gnsp.plot[step].descr;
    tmpHtml = tmpHtml + "<button class='btnMorePlot'>More</button>";
    for(var more in gnsp.plot[step].sub){
      tmpHtml = tmpHtml + "<div class='morePlot'><b>"+gnsp.plot[step].sub[more].name+":</b><br/>"+gnsp.plot[step].sub[more].descr+"</div>";
      if(gnsp.plot[step].sub[more].sequence!==undefined){
        for(var itm in gnsp.plot[step].sub[more].sequence){
          tmpHtml = tmpHtml + "<button class='morePlot btnSequence' for='"+itm+"' plot='"+step+"' sub='"+more+"'>"+capital(itm)+"</button>";
        }
      }
    }
    tmpHtml = tmpHtml + "</div>";
    $("#plot").append(tmpHtml);
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
  $(document).on("click",".btnMorePlot", function(){
    $(this).parent().find(".morePlot").show();
  });
  $(document).on("click",".btnSequence",function(){
    $("#greyout").show();
    var popupHtml = "";
    popupHtml = popupHtml + "<div>";
    popupHtml = popupHtml + gnsp.plot[$(this).attr("plot")].sub[$(this).attr("sub")].sequence[$(this).attr("for")];
    popupHtml = popupHtml + "<br/><button id='btnClose'>Close</button>";
    popupHtml = popupHtml + "</div>";
    $(".popup").html(popupHtml);
  });
  
  // Load NPC
  for(var dude in gnsp.npc){
    var tmpHtml = "<div class='npcGuy'>";
    tmpHtml = tmpHtml + "<div class='npcName'>"+gnsp.npc[dude].name+"</div>";
    for(var attr in gnsp.npc[dude]){
      tmpHtml = tmpHtml + "<div class='npcDetails' for='"+attr+"'><i>"+capital(attr)+":</i> ";
      if(typeof(gnsp.npc[dude][attr])==="object"){
        if(attr=="advantage"){
          for(var subAttr in gnsp.npc[dude][attr]){
            tmpHtml = tmpHtml + "<br/>" + gnsp.npc[dude][attr][subAttr].name + " - <br/>";
            tmpHtml = tmpHtml + gnsp.npc[dude][attr][subAttr].descr;
          }
        } else {
          for(var subAttr in gnsp.npc[dude][attr]){
            tmpHtml = tmpHtml + "<br/>" + subAttr + " - <br/>";
            tmpHtml = tmpHtml + gnsp.npc[dude][attr][subAttr];
          }
        }
      } else {
        tmpHtml = tmpHtml + gnsp.npc[dude][attr];
      }
      tmpHtml = tmpHtml + "</div>";
    }
    tmpHtml = tmpHtml + "</div>";
    $("#npc").append(tmpHtml);
  }
  
  // Search
  for(var attr in base){
    if(typeof(base[attr])==="object"){
      for(var sub in base[attr]){
        $("#searchResults").append("<span class='lnk searchInfo' obj='base' attr='"+attr+"' sub='"+sub+"'>"+capital(sub)+"</span>");
      }
    } else{
      $("#searchResults").append("<span class='lnk searchInfo' obj='base' attr='"+attr+"'>"+capital(attr)+"</span>");
    }
  }
  $(document).on("click",".searchInfo",function(){
    $("#greyout").show();
    var popupHtml = "";
    popupHtml = popupHtml + "<div>";
    switch($(this).attr("obj")){
      case "gnsp":
        if($(this).attr("sub")===undefined)
          popupHtml = popupHtml + gnsp[$(this).attr("attr")];
        else
          popupHtml = popupHtml + gnsp[$(this).attr("attr")][$(this).attr("sub")];
        break;
      default:
        if($(this).attr("sub")===undefined)
          popupHtml = popupHtml + base[$(this).attr("attr")];
        else
          popupHtml = popupHtml + base[$(this).attr("attr")][$(this).attr("sub")];
        break;
    }
    popupHtml = popupHtml + "<br/><button id='btnClose'>Close</button>";
    popupHtml = popupHtml + "</div>";
    $(".popup").html(popupHtml);
  });
  var srchTimer;
  $("#txtSearch").keyup(function(e){
    clearTimeout(srchTimer);
    var inputElem = this;
    
    srchTimer = setTimeout(function () {
      if ($(inputElem).val() == "") {
        $(".searchInfo").show();
        return false;
      }
      
      var input=$(inputElem).val().replace(/ /g,'_').toLowerCase();
      $(".searchInfo").hide();
      $(".searchInfo[attr='"+input+"']").show();
      $(".searchInfo[sub='"+input+"']").show();
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
      if($(this).hasClass("skill"))
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
    if($(this).attr('lvl')!==undefined){
      switch($(this).attr('lvl')){
        case '5':
          popupHtml = popupHtml + "<div class='popupInfo'>Rank 5: 10s exxplode (+1 die)</div>";
        case '4':
          popupHtml = popupHtml + "<div class='popupInfo'>Rank 4: Sets of 15 = 2 Raises</div>";
        case '3':
          popupHtml = popupHtml + "<div class='popupInfo'>Rank 3: Re-Roll a single die</div>";
      }
    }
    popupHtml = popupHtml + "<br/><button id='btnClose'>Close</button>";
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
    vodacce: "The former cradle of civilization, now split between seven Merchant Princes whose complex schemes reach every corner of the world.",
    castille: "Headquarters of the Vaticine church, this fertile Nation recently fought off an invasion—their western neighbor, Montaigne, wished to seize their rich farmlands and plentiful mines.",
    avalon: "Green and enchanted, this union of three kingdoms has recently risen to the forefront of Théan politics.",
    inismore: "The Emerald Isle is the rebellious, misbehaving little brother of Avalon, led by a king who may be immortal and is more than certainly mad.",
    alahnahquin: "",
    aksum: "In Aksum, there is a Church of the Prophet in Aksum which is fairly different from any of those found in Théah or the Crescent Empire, tempered as it is by a legacy of help from the Ifritian gods. In the distant past they worshipped many gods, including some who gifted them with advanced learning, but they converted to the teachings of the Second Prophet some centuries ago and now they are asserting their culture firmly. There are secret police, divine formulae, secret apochrypha, ancient evils, and a whole lot more in this mountainous region.",
    aragosta: "Location: Northwest of the Atabean Sea, off the east coast of Nahuacan Alliance<br/>Landmarks: Claws and Lobster Bay, the Bucket o' Blood, the Forever Reef<br/>Governance: The Brotherhood of the Coast"
  },
  virtue: "You may only activate your Virtue once per Session. Activating your Virtue has no cost, but it may require specific circumstances: meeting a character, another Hero taking Wounds, etc.",
  hubris: "You may only activate your Hero’s Hubris once per Session. Activating your Hubris gives you a Hero Point. The GM can offer a Hero Point to activate a Hero’s Hubris, but the player may refuse.",
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
  iethihsothokon: "At the beginning of each Scene you may attune your spirit to one Iethihsothókon you know at no cost. Until you attune to a different Iethihsothókon you have access to its associated Iáhthénen, and may activate its associated Iónhnhe by spending a Hero Point. At the beginning of each new Round, an Akwékon may freely attune to a different Iethihsothókon, gaining access to that Iethihsothókon’s Iáhthénen and Iónhnhe. Additionally, an Akwékon may attune to a different Iethihsothókon during a Scene by spending one Raise.",
  death_spiral: "<img src='death_spiral.png' />",
  damage: "<img src='death_spiral.png' />",
  risk: "Step 1: Setting the Stage<br/>Step 2: Approach<br/>Step 3: Gather Dice<br/>Step 4: Consequences & Opportunities<br/>Step 5: Roll & Raises<br/>Step 6: Using Raises",
  hero_point: "Getting:<br/>• Either he or the GM activates his Hero’s Hubris.<br/>• He chooses to say, “My Hero fails.” The player does not roll dice and cannot spend Raises to overcome Consequences and produce other effects. <br/>• His Hero acts in a way as described by his Quirks. A player can earn only 1 Hero Point per session per Quirk.<br/>• The GM buys any unused dice that aren’t part of a Raise. For each die the GM chooses to buy in this fashion, you gain 1 Hero Point...and he gains 1 Danger Point.<br/>Using:<br/>• Add one bonus d10 to his roll before a Risk. A player may spend multiple Hero Points in this fashion on a single Risk.<br/>• Add three bonus d10s to another Hero’s roll before a Risk. This represents the first Hero helping the second in some way, even if it is only moral support; a Hero can only accept help from one other Hero at a time.<br/>• Activate a special ability on his Hero Sheet. A player may spend multiple Hero Points on different special abilities on a single Risk.<br/>• Take an Action while Helpless. A player may spend multiple Raises on this Action, just as if they were not Helpless.",
  danger_point: "Using:<br/>• Increase the total needed for a Raise by 5 for a Risk or Round. This affects all Heroes in the Scene.<br/>• Add two dice to any Villain’s die pool.<br/>• Activate a Brute Squad’s special ability.<br/>• Activate a Villain’s special ability.<br/>• Murder. If a Hero becomes helpless, a Villain can spend a Danger Point to murder that character.",
  sequence: {
    action: "When multiple Heroes are involved, or when a Hero faces a Villain, or when all their actions are important all at once and seconds count, it may be time for an Action Sequence.",
    dramatic: "Dramatic Sequences tend to move slower than Action Sequence. The Heroes usually have more time to make decisions, but those decisions are just as important as the ones made in an Action Sequence— and sometimes are even more important."
  },
  wounds: "Wounds represent physical injuries, albeit minor ones. Before another character takes Wounds, you can use your own Raises to take the Wounds instead. At the end of a Scene, when the Heroes have a few minutes to catch their breath and regroup, all Wounds are healed. Dramatic Wounds remain. See Death Spiral",
  dramatic_wounds: "Dramatic Wounds are much more serious and obvious. As your Hero takes Wounds and Dramatic Wounds, she gains bonuses. See Death Spiral",
  firearms: "Anyone shot by a firearm by a Hero or Villain takes 1 Dramatic Wound in addition to all other normal effects from the attack. If you shoot another character with a firearm using 2 Raises, that character takes 2 Wounds and 1 Dramatic Wound. The target cannot use Raises to negate the Dramatic Wound from a firearm; he might be able to minimize the damage, but he can’t dodge a bullet.",
  helpless: "A Helpless character is prone and cannot get to his feet. A Helpless character can still roll dice for Risks, but must spend a Hero Point to taken an Action. If the Hero wants to take more than one Action, he must spend multiple Hero Points.",
  brute_squads: "A Brute Squad has only one statistic—Strength—determined by the number of individuals in the Squad.<br/>Special types:<br/>Guards: Spend a Danger Point and they force an attack just made against a Villain to target themselves instead, and reduce the Wounds dealt by 1. <br/>Assassins: Spend a Danger Point and they go before the fastest Hero, causing Wounds immediately. <br/>Duelists: Spend a Danger Point and they attack a second time, choosing either the same Hero or a different one. <br/>Pirates: Spend a Danger Point and they abduct a non-Hero character from the Scene. This reduces the Brute Squad’s Strength by 1 as a single member of the Squad escapes the Scene with the abducted character. <br/>Thieves: Spend a Danger Point and they steal one item currently in a Hero’s possession. This reduces the Brute Squad’s Strength by 1 as a single member of the Squad escapes the Scene with the item.",
  guards: "Special Brute Squad - Spend a Danger Point and they force an attack just made against a Villain to target themselves instead, and reduce the Wounds dealt by 1.",
  assassins: "Special Brute Squad - Spend a Danger Point and they go before the fastest Hero, causing Wounds immediately.",
  duelists: "Special Brute Squad - Spend a Danger Point and they attack a second time, choosing either the same Hero or a different one.",
  pirates: "Special Brute Squad - Spend a Danger Point and they abduct a non-Hero character from the Scene. This reduces the Brute Squad’s Strength by 1 as a single member of the Squad escapes the Scene with the abducted character.",
  thieves: "Special Brute Squad - Spend a Danger Point and they steal one item currently in a Hero’s possession. This reduces the Brute Squad’s Strength by 1 as a single member of the Squad escapes the Scene with the item.",
  villain: "Strength is the Villain’s personal ability, intellect, charm, skill with a sword, ability to use magic, etc. It is her individual capability<br/>Influence is the Villain’s money, resources, minions, political power, allies, etc. It is her ability to change the world to achieve her goals.<br/>Whenever a Villain takes a Risk, he rolls up to a number of dice equal to his Villainy Rank.",
  duel: {
    dueling: "To perform a Maneuver, spend a Raise on your Action. A Duelist can perform one, and only one, Maneuver on each of his Actions. In addition, a Duelist can never perform the same Maneuver in consecutive Actions",
    slash: "A basic Maneuver used to attack, but one that even the most gifted street thug wishes she could master. When you perform Slash, deal a number of Wounds equal to your Ranks in Weaponry.",
    parry: "The art of putting your weapon between yourself and harm. Perform Parry to prevent a number of Wounds equal to your Ranks in Weaponry. You can only activate Parry on your Action, immediately following the Maneuver that caused your Wounds.",
    feint: "Posturing and positioning in such a way that your opponent drops his guard or tries to block an attack that never comes. When you perform Feint, you deal one Wound—if your target is injured again this Round, he suffers one additional Wound.",
    lunge: "A reckless and sometimes desperate Maneuver, but one capable of ending a conflict immediately. When you perform Lunge, spend all of your Raises. You deal a number of Wounds equal to your Ranks in Weaponry plus the Raises you spend. These Wounds cannot be avoided or prevented.",
    bash: "Forcing your opponent off balance—with your pommel or a closed fist—to render her next strike less effective. When you perform Bash, deal one Wound; the next time your target deals Wounds this Round she deals one less Wound for each Rank you have in Weaponry.",
    riposte: "When you perform Riposte, you prevent a number of Wounds equal to your Ranks in Weaponry, and deal a number of Wounds equal to your Ranks in Weaponry. You can only perform Riposte on your Action, and you must perform it on the Action immediately following the Maneuver that caused the Wounds you are preventing. A Duelist may only perform this Maneuver once per Round."
  }
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
  $("#npc").hide();
  $("#search").hide();
  $("#addHero").hide();
  $(".morePlot").hide();
}

function capital(input){
  if(input.indexOf('_')>-1){
    input = input.replace(/[_]/g,' ');
    input = input.replace(/\s[a-z]/g,function(c){ return c.toUpperCase(); });
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}
